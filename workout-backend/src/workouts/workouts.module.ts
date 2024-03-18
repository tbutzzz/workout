import { Module } from '@nestjs/common';
import { WorkoutsResolver } from './workouts.resolver';
import { Workout } from './entities/workout.entity/workout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutsService } from './workouts.service';
import { Exercise } from './entities/workout.entity/exercise.enitity';
import { WorkoutExercisesResolver } from './workout-exercises.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Workout, Exercise])], // Registers the workout entity (or repo) so that TypeOrm can manage it
  providers: [WorkoutsResolver, WorkoutsService, WorkoutExercisesResolver] // and registers the repo (can now perform db ops) -> can also now inject this into services/resolvers
})
export class WorkoutsModule {}
