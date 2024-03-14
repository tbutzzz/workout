import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { BodyMeasurementsService } from './body-measurements.service';
import { CreateBodyMeasurementDto } from './dto/create-body-measurement.dto';
import { UpdateBodyMeasurementDto } from './dto/update-body-measurement.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('body-measurements')
export class BodyMeasurementsController {

    constructor(private readonly bodyMeasurementsService: BodyMeasurementsService) {} // Dependency Injection - Refs an instance of the service

    @Get() // Get /body-measurements /body-measurements/?date=date // Query
    findAll(@Query('date') date?: string, @Query() paginationQuery?: PaginationQueryDto) {
        return this.bodyMeasurementsService.findAll(date, paginationQuery);
    }

    @Get(':id') // Get /body-measurements/:id // Query
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.bodyMeasurementsService.findOne(id);
    }

    @Post() // Post /body-measurements // Mutation
    create(@Body(ValidationPipe) createBodyMeasurementDto: CreateBodyMeasurementDto) {
        return this.bodyMeasurementsService.create(createBodyMeasurementDto);
    }

    @Patch(':id') // Patch /body-measurements/:id // Mutation
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateBodyMeasurementDto: UpdateBodyMeasurementDto) {
        return this.bodyMeasurementsService.update(id, updateBodyMeasurementDto);
    }

    @Delete(':id') // Delete /body-measurements/:id // Mutation
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.bodyMeasurementsService.delete(id);
    }
}
