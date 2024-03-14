import { MigrationInterface, QueryRunner } from "typeorm";

export class BodyMeasurementRefactor1710117099824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "body_measurement" RENAME COLUMN "abdominal" TO "ab"`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "body_measurement" RENAME COLUMN "ab" TO "abdominal"`
        )
    }

}
