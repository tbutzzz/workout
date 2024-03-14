import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    //@Type(() => Number) // Query params are sent as a string so this makes sure value is parsed as a Number
    limit: number;

    @IsOptional()
    @IsPositive()
    //@Type(() => Number) // Do not need this since enableImplicitConversion is on in main.ts
    offset: number;
}
