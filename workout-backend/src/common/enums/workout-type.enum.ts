import { registerEnumType } from "@nestjs/graphql";

export enum WorkoutType {
    LEGSA = 'LegsA',
    PUSHA = 'PushA',
    PULLA = 'PullA',
    LEGSB = 'LegsB',
    PUSHAB = 'PushB',
    PULLB = 'PullB',
}

registerEnumType(WorkoutType, {
    name: 'WorkoutType',
});