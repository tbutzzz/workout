import { CreateBodyMeasurementDto } from "./create-body-measurement.dto";
import {PartialType} from '@nestjs/mapped-types';

export class UpdateBodyMeasurementDto extends PartialType(CreateBodyMeasurementDto) {}

