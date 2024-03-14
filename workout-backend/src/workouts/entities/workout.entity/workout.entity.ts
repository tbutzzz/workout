import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Exercise {
    name: string;
    sets: number;
    reps: string;
    weight: number;
}

@ObjectType({ description: 'Workout model' })
export class Workout {
    @Field(() => ID, { description: 'A unique identifier' })
    id: number;
    type: string;
    date: Date;
    @Field(() => [Exercise]) // the graphql pluglin that was added to nest-cli.json will infer this so we do not need to enter it // Might want to manually overriding some
    exercises: Exercise[];
}
