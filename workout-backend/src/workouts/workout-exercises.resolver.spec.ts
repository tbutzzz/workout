import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutExercisesResolver } from './workout-exercises.resolver';

describe('WorkoutExercisesResolver', () => {
  let resolver: WorkoutExercisesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutExercisesResolver],
    }).compile();

    resolver = module.get<WorkoutExercisesResolver>(WorkoutExercisesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
