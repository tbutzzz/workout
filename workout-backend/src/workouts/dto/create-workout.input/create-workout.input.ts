import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsDate } from "class-validator";
import { WorkoutType } from "src/common/enums/workout-type.enum";

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
    type: WorkoutType;

    @Field()
    date: string;

    @Field(() => [ExerciseInput], { description: 'List of exercises' })
    exercises: ExerciseInput[];
}
