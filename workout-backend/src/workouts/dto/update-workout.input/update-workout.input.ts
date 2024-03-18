import { InputType, PartialType } from "@nestjs/graphql";
import { CreateWorkoutInput } from '../create-workout.input/create-workout.input'

@InputType()
export class UpdateWorkoutInput extends PartialType(CreateWorkoutInput) {}
