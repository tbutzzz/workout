import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyMeasurementsModule } from './body-measurements/body-measurements.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Application } from 'express';
import { join } from 'path';
import { WorkoutsModule } from './workouts/workouts.module';
import { DateScalar } from './common/scalars/date.scalar/date.scalar';
import { PubSubModule } from './pub-sub/pub-sub.module';

@Module({
  imports: [BodyMeasurementsModule, WorkoutsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true, // DO NOT USE IN PRODUCTION // This will drop all tables and recreate them for each thing marked as an entity
  }),
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  installSubscriptionHandlers: true, // Add a websocket connection
  // buildSchemaOptions: {
    // dateScalarMode: 'timestamp',
    // numberScalarMode: 'integer', // GraphQL defaults the scalar type of number to Float this will default number scalar type to Integer
  // }
}),
WorkoutsModule,
PubSubModule],
  controllers: [AppController],
  providers: [AppService, DateScalar],
})
export class AppModule {}
