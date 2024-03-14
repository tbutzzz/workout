import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ExerciseInput {
    name: string;
    sets: number;
    reps: string;
    weight: number;
}

@InputType()
export class CreateWorkoutInput {
    type: string;
    date: Date;
    @Field(() => [ExerciseInput], { description: 'List of exercises' })
    exercises: ExerciseInput[];
}
