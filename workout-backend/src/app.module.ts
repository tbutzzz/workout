import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyMeasurementsModule } from './body-measurements/body-measurements.module';
import { BodyMeasurementsController } from './body-measurements/body-measurements.controller';
import { BodyMeasurementsService } from './body-measurements/body-measurements.service';

@Module({
  imports: [BodyMeasurementsModule],
  controllers: [AppController, BodyMeasurementsController],
  providers: [AppService, BodyMeasurementsService],
})
export class AppModule {}
