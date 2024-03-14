import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutsResolver } from './workouts.resolver';

describe('WorkoutsResolver', () => {
  let resolver: WorkoutsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutsResolver],
    }).compile();

    resolver = module.get<WorkoutsResolver>(WorkoutsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
