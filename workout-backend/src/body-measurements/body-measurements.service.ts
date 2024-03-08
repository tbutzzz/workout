import { Injectable } from '@nestjs/common';
import { CreateBodyMeasurementDto } from './dto/create-body-measurement.dto';
import { UpdateBodyMeasurementDto } from './dto/update-body-measurement.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class BodyMeasurementsService {
    private bodyMeasurements = [
        {
            "id": 1,
            "weight": 251,
            "chest": 19,
            "abdominal": 51,
            "thigh": 16,
            "date": "2024/03/06"
        },
        {
            "id": 2,
            "weight": 252,
            "chest": 21,
            "abdominal": 50,
            "thigh": 17,
            "date": "2024/03/05"
        },
        {
            "id": 3,
            "weight": 253,
            "chest": 21,
            "abdominal": 53,
            "thigh": 18,
            "date": "2024/03/04"
        }
    ]

    findAll(date?: string) {
        if (date) {
            const filteredMeasurements = this.bodyMeasurements.filter(bodyMeasurement => {
                return bodyMeasurement.date === date; 
            });
            if (filteredMeasurements.length === 0) throw new NotFoundException(`No body measurements found for date ${date}`);

            return filteredMeasurements;
        } else {
            return this.bodyMeasurements;
        }
    }

    findOne(id: number) {
        const bodyMeasurement = this.bodyMeasurements.find(bodyMeasurement => bodyMeasurement.id === id);

        if (!bodyMeasurement) throw new NotFoundException(`Body Measurement with ID ${id} not found`)

        return bodyMeasurement;
    }

    create(createBodyMeasurementDto: CreateBodyMeasurementDto) {
        const findHighestId = this.bodyMeasurements.reduce((acc, bodyMeasurement) => {
            if (bodyMeasurement.id > acc) {
                acc = bodyMeasurement.id;
            }
            return acc;
        }, 0);
        const newMeasurement = {
            id: findHighestId + 1,
            ...createBodyMeasurementDto
        }
        this.bodyMeasurements.push(newMeasurement);
        return newMeasurement;
    }

    update(id: number, updateBodyMeasurementDto: UpdateBodyMeasurementDto) {
        this.bodyMeasurements = this.bodyMeasurements.map(bodyMeasurement => {
            if (bodyMeasurement.id === id) {
                return {
                    ...bodyMeasurement,
                    ...updateBodyMeasurementDto
                }
            }
            return bodyMeasurement;
        });
        return this.findOne(id);
    }

    delete(id: number) {
        const removedMeasurement = this.findOne(id);

        this.bodyMeasurements = this.bodyMeasurements.filter(bodyMeasurement => bodyMeasurement.id !== id);

        return removedMeasurement;
    }
}
