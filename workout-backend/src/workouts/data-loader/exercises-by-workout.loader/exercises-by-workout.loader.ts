import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DataLoader from 'dataloader';
import { Workout } from 'src/workouts/entities/workout.entity/workout.entity';
import { Exercise } from 'src/workouts/entities/workout.entity/exercise.enitity';
import { In, Repository } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class ExercisesByWorkoutLoader extends DataLoader<number, Exercise[]> {
    constructor(
        @InjectRepository(Workout)
        private readonly workoutsRepository: Repository<Workout>,
    ) {
        super(keys => this.batchLoadFn(keys));  // Used by the data loader to batch and cache records // keys is an array of numbers, takes an array of batched ids
    }

    private async batchLoadFn(  // private because it is not supposed to be called outside of data loader
        workoutIds: readonly number[],
    ): Promise<Exercise[][]> {
        const workoutsWithExercises = await this.workoutsRepository.find({
            select: ['id'],
            relations: ['exercises'],
            where: {
                id: In(workoutIds as number[])
            }
        });
        return workoutsWithExercises.map(workout => workout.exercises);
    }
}
