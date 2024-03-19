import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./exercise.enitity";
import { WorkoutType } from "src/common/enums/workout-type.enum";
import { loggerMiddleware } from "src/common/middleware/logger.middleware";

@Entity()
@ObjectType({ description: 'Workout model' })
export class Workout {
    @Field(() => ID, { description: 'A unique identifier' })
    @PrimaryGeneratedColumn()
    id: number;

    @Field({ middleware: [loggerMiddleware] })
    @Column()
    type: WorkoutType;

    @Field()
    @Column()
    date: Date;

    @OneToMany(() => Exercise, exercise => exercise.workout, { cascade: true })
    exercises: Exercise[];

    @CreateDateColumn()
    createdAt?: Date;
}
