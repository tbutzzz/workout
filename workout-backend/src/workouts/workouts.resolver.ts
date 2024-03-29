import { Args, ID, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Workout } from './entities/workout.entity/workout.entity';
import { ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateWorkoutInput } from './dto/create-workout.input/create-workout.input';
import { UpdateWorkoutInput } from './dto/update-workout.input/update-workout.input'
import { WorkoutsService } from './workouts.service';
import { Exercise } from './entities/workout.entity/exercise.enitity';
import { PubSub } from 'graphql-subscriptions';

@Resolver(() => Workout) // This makes it so it will be analyzed by the nest js graphql module
export class WorkoutsResolver {
    constructor(private readonly workoutsService: WorkoutsService,
        private readonly pubSub: PubSub,
    ) { }

    @Query(() => [Workout], { name: 'workouts' }) // Query type name Expects to return a reference to the query return type
    async findAll() {
        return this.workoutsService.findAll();
    }

    @Query(() => Workout, { name: 'workout' }) // Query type name Expects to return a reference to the query return type
    async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
        return this.workoutsService.findOne(id);
    }

    @Mutation(() => Workout, { name: 'createWorkout' })
    async create(@Args('createWorkoutInput') createWorkoutInput: CreateWorkoutInput) { // Required to pass the name of the input object
        return this.workoutsService.create(createWorkoutInput);
    }

    @Mutation(() => Workout, { name: 'updateWorkout' })
    async update(
        @Args('id', ParseIntPipe) id: number,
        @Args('updateWorkoutInput') updateWorkoutInput: UpdateWorkoutInput,
    ) {
        return this.workoutsService.update(id, updateWorkoutInput);
    }

    @Mutation(() => String, { name: 'removeWorkout' })
    async remove(
        @Args('id', ParseIntPipe) id: number, // Grabs the id from the incoming request
    ) {
        await this.workoutsService.remove(id);
        return (`Workout with id ${id} was removed`);
    }

}
