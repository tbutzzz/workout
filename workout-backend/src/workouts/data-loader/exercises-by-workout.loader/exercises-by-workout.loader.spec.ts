import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesByWorkoutLoader } from './exercises-by-workout.loader';

describe('ExercisesByWorkoutLoader', () => {
  let provider: ExercisesByWorkoutLoader;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercisesByWorkoutLoader],
    }).compile();

    provider = module.get<ExercisesByWorkoutLoader>(ExercisesByWorkoutLoader);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
