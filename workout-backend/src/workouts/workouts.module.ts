import { Module } from '@nestjs/common';
import { WorkoutsResolver } from './workouts.resolver';

@Module({
  providers: [WorkoutsResolver]
})
export class WorkoutsModule {}
