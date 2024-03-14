import { Module } from '@nestjs/common';
import { BodyMeasurementsController } from './body-measurements.controller';
import { BodyMeasurementsService } from './body-measurements.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BodyMeasurement } from './entities/body-measurement.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BodyMeasurement])],
    controllers: [BodyMeasurementsController],
    providers: [BodyMeasurementsService]
})
export class BodyMeasurementsModule {}
