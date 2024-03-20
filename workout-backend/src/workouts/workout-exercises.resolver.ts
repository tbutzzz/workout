import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Workout } from './entities/workout.entity/workout.entity';
import { Exercise } from './entities/workout.entity/exercise.enitity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExercisesByWorkoutLoader } from './data-loader/exercises-by-workout.loader/exercises-by-workout.loader';

@Resolver(() => Workout)
export class WorkoutExercisesResolver {
    constructor(
       private readonly exercisesByWorkout: ExercisesByWorkoutLoader,
    ) {}
    @ResolveField(() => [Exercise])
    async getExercisesOfWorkout(@Parent() workout: Workout): Promise<Exercise[]> {
       return this.exercisesByWorkout.load(workout.id);
    }

}
