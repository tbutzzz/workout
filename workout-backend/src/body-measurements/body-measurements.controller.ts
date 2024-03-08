import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { BodyMeasurementsService } from './body-measurements.service';
import { CreateBodyMeasurementDto } from './dto/create-body-measurement.dto';
import { UpdateBodyMeasurementDto } from './dto/update-body-measurement.dto';

@Controller('body-measurements')
export class BodyMeasurementsController {

    constructor(private readonly bodyMeasurementsService: BodyMeasurementsService) {} // Dependency Injection - Refs an instance of the service

    @Get() // Get /body-measurements /body-measurements/?date=date
    findAll(@Query('date') date?: string) {
        return this.bodyMeasurementsService.findAll(date);
    }

    @Get(':id') // Get /body-measurements/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.bodyMeasurementsService.findOne(id);
    }

    @Post() // Post /body-measurements
    create(@Body(ValidationPipe) createBodyMeasurementDto: CreateBodyMeasurementDto) {
        return this.bodyMeasurementsService.create(createBodyMeasurementDto);
    }

    @Patch(':id') // Patch /body-measurements/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateBodyMeasurementDto: UpdateBodyMeasurementDto) {
        return this.bodyMeasurementsService.update(id, updateBodyMeasurementDto);
    }

    @Delete(':id') // Delete /body-measurements/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.bodyMeasurementsService.delete(id);
    }
}
