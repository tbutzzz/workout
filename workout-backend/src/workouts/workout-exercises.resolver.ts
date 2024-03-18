import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Workout } from './entities/workout.entity/workout.entity';
import { Exercise } from './entities/workout.entity/exercise.enitity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Resolver(() => Workout)
export class WorkoutExercisesResolver {
    constructor(
        @InjectRepository(Exercise)
        private readonly exercisesRepository: Repository<Exercise>,
    ) {}
    @ResolveField('exercises', () => [Exercise])
    async getExercisesOfWorkout(@Parent() workout: Workout) {
        return this.exercisesRepository
        .createQueryBuilder('exercise')
        .innerJoin('exercise.workout', 'workout', 'workout.id = :workoutId', {
            workoutId: workout.id,
        })
        .getMany()
    }

}
