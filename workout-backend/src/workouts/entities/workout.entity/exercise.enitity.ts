import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Workout } from "./workout.entity";

@Entity()
@ObjectType() // Makes graphQl expose this object in schema
export class Exercise {
    @Field(() => ID, { description: 'A unique identifier' })
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    sets: number;

    @Field()
    @Column()
    reps: string;

    @Field()
    @Column()
    weight: number;

    @ManyToOne(() => Workout, workout => workout.exercises)
    workout: Workout;
}