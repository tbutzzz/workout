import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsDate } from "class-validator";

@InputType()
export class ExerciseInput {
    @Field()
    name: string;

    @Field()
    sets: number;

    @Field()
    reps: string;

    @Field()
    weight: number;
}

@InputType()
export class CreateWorkoutInput {
    @Field()
    type: string;

    @Field()
    @IsDate()
    date: Date;

    @Field(() => [ExerciseInput], { description: 'List of exercises' })
    exercises: ExerciseInput[];
}
