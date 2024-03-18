import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinTable, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./exercise.enitity";

@Entity()
@ObjectType({ description: 'Workout model' })
export class Workout {
    @Field(() => ID, { description: 'A unique identifier' })
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    type: string;

    @Field()
    @Column()
    date: Date;

    @OneToMany(() => Exercise, exercise => exercise.workout, { cascade: true })
    exercises: Exercise[];
}
