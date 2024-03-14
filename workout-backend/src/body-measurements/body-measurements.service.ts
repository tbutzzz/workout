import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBodyMeasurementDto } from './dto/create-body-measurement.dto';
import { UpdateBodyMeasurementDto } from './dto/update-body-measurement.dto';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BodyMeasurement } from './entities/body-measurement.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Injectable()
export class BodyMeasurementsService {
    constructor(
        @InjectRepository(BodyMeasurement)
        private readonly bodyMeasurementRepository: Repository<BodyMeasurement>
    ) {}

    async findAll(date?: string, paginationQuery?: PaginationQueryDto) {
        const { limit, offset } = paginationQuery;
        if (date) {
            const filteredMeasurements = await this.bodyMeasurementRepository.find({ where: { date: date}});
            if (filteredMeasurements.length === 0) throw new NotFoundException(`No body measurements found for date ${date}`);

            return filteredMeasurements;
        } else {
            return this.bodyMeasurementRepository.find({
                skip: offset,
                take: limit,
            });
        }
    }

    async findOne(id: number) {
        const bodyMeasurement = await this.bodyMeasurementRepository.findOne({ where: { id: id}});

        if (!bodyMeasurement) throw new NotFoundException(`Body Measurement with ID ${id} not found`)

        return bodyMeasurement;
    }

    async create(createBodyMeasurementDto: CreateBodyMeasurementDto) {
        const { date } = createBodyMeasurementDto;
        const existingMeasurement = await this.bodyMeasurementRepository.findOne({ where: { date: date}});
        if (existingMeasurement) throw new BadRequestException(`Body Measurement for date ${date} already exists`);

        const newBodyMeasurement = this.bodyMeasurementRepository.create(createBodyMeasurementDto);
        return await this.bodyMeasurementRepository.save(newBodyMeasurement);
    }

    async update(id: number, updateBodyMeasurementDto: UpdateBodyMeasurementDto) {
       const updatedMeasurement = await this.bodyMeasurementRepository.preload({
            id: id,
            ...updateBodyMeasurementDto
       });
       if (!updatedMeasurement) throw new NotFoundException(`Body Measurement with ID ${id} not found`);
       return this.bodyMeasurementRepository.save(updatedMeasurement);
    }

    async delete(id: number) {
        const deleteBodyMeasurement = await this.bodyMeasurementRepository.findOne({ where: { id: id}});
        return this.bodyMeasurementRepository.remove(deleteBodyMeasurement);
    }
}
