import { IsDateString, IsNumber } from "class-validator";

export class CreateBodyMeasurementDto {
    @IsNumber()
    weight: number;

    @IsNumber()
    chest: number;

    @IsNumber()
    abdominal: number; 

    @IsNumber()
    thigh: number; 

    @IsDateString()
    date: string;
}