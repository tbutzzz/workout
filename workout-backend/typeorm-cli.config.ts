import { BodyMeasurementRefactor1710117099824 } from "src/migrations/1710117099824-BodyMeasurementRefactor";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [],
    migrations: [BodyMeasurementRefactor1710117099824],
  });