import { Field, ObjectType } from "@nestjs/graphql";

export class Exercise {
    name: string;
    sets: number;
    reps: string;
    weight: number;
}

@ObjectType()
export class Workout {
    id: number;
    type: string;
    date: Date;
    @Field(() => [String]) // the graphql pluglin that was added to nest-cli.json will infer this so we do not need to enter it
    exercises: Exercise[];
}
