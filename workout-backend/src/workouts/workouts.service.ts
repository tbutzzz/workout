import { Injectable } from '@nestjs/common';
import { CreateWorkoutInput } from './dto/create-workout.input/create-workout.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from './entities/workout.entity/workout.entity';
import { Repository, ReturnDocument } from 'typeorm';
import { UserInputError } from '@nestjs/apollo';
import { Exercise } from './entities/workout.entity/exercise.enitity';
import { UpdateWorkoutInput } from './dto/update-workout.input/update-workout.input';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class WorkoutsService {
    constructor(
        @InjectRepository(Workout)
        private readonly workoutsRepository: Repository<Workout>,
        @InjectRepository(Exercise)
        private readonly exercisesRepositry: Repository<Exercise>,
        private readonly pubSub: PubSub,
    ) {}

    async findAll() {
        return this.workoutsRepository.find({ relations: ['exercises'] });
    }

    async findOne(id: number) {
        const workout = await this.workoutsRepository.findOne({ where: { id }, relations: ['exercises'] });
        if (!workout) throw new UserInputError(`Workout with id ${id} does not exist`);
        return workout;
    }

    async create(createWorkoutInput: CreateWorkoutInput) {
        const workout = this.workoutsRepository.create(createWorkoutInput); // repo create reutuns new instance of entity, it is synchronous
        return this.workoutsRepository.save(workout);
    }

    async update(id: number, updateWorkoutInput: UpdateWorkoutInput) {
        try {
            const updateWorkout = await this.workoutsRepository.preload({  // creates a new entity based on object passed in
                id,                                                        // checks if entity already exists then replaces all values with new ones passed in
                ...updateWorkoutInput,                                 // returns undefined if id not found
            });

            if (!updateWorkout) throw new UserInputError(`Workout with input ${id} does not exist`);

            return this.workoutsRepository.save(updateWorkout);

        } catch (error) {
            console.error('error updating workout: ', error);
            throw new Error('Failed to update workout');
        }
    }

    async remove(id: number) {
        const removeWorkout = await this.workoutsRepository.findOne({ where: { id }, relations: ['exercises']})
        if (!removeWorkout) throw new Error(`Workout with id ${id} was not found`);
        await Promise.all(removeWorkout.exercises.map(exercise => this.exercisesRepositry.remove(exercise)));
        return this.workoutsRepository.remove(removeWorkout);
    }

}
