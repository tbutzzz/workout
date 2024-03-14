import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Workout } from './entities/workout.entity/workout.entity';
import { ParseIntPipe } from '@nestjs/common';
import { CreateWorkoutInput } from './dto/create-workout.input/create-workout.input';

@Resolver() // This makes it so it will be analyzed by the nest js graphql module
export class WorkoutsResolver {
    @Query(() => [Workout], { name: 'workouts' }) // Query type name Expects to return a reference to the query return type
    async findAll() {
        return [];
    }

    @Query(() => Workout, { name: 'workout', nullable: true }) // Query type name Expects to return a reference to the query return type
    async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
        return null;
    }

    @Mutation(() => Workout, { name: 'createWorkout', nullable: true})
    async create(@Args('createWorkoutInput') createWorkoutInput: CreateWorkoutInput) { // Required to pass the name of the input object
        return null;
    }
}
