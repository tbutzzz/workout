import { BeforeInsert, BeforeUpdate, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity() // sql table name will be body_measurement
export class BodyMeasurement {
    @PrimaryGeneratedColumn() // Makes the id column the primary key and auto-increments the column
    id: number;

    @Column({ name: 'weight', type: 'float', nullable: true})
    weight: number;

    @Column()
    chest: number;

    @Column()
    abdominal: number; 

    @Column()
    thigh: number; 

    @Index()
    @Column() // if wanted to be json and nullable, could be @Column('json', { nullable: true })
    date: string;

    @Column()
    age: number;

    @Column({ name: 'body_fat_percentage', type: 'float', nullable: true})
    bodyFatPercentage: number;

    @BeforeUpdate()
    @BeforeInsert()
    calculatedBodyFatPercentage() {
        if (this.chest && this.abdominal && this.thigh && this.age) {
            const measurementsSum = this.chest + this.abdominal + this.thigh;
            const bodyDensity = (1.10938 - (0.0008267 * measurementsSum) + (0.0000016 * measurementsSum * measurementsSum) - (0.0002574 * this.age))
            this.bodyFatPercentage = parseFloat(((495 / bodyDensity) - 450).toFixed(2));
        }
     }
}