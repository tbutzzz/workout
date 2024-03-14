import { Query, Resolver } from '@nestjs/graphql';
import { Workout } from './entities/workout.entity/workout.entity';

@Resolver() // This makes it so it will be analyzed by the nest js graphql module
export class WorkoutsResolver {
    @Query(() => [Workout], { name: 'workouts' }) // Expects to return a reference to the query return type
    async findAll() {
        return [];
    }
}
