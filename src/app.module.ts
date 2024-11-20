import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/model/user.model';
import { DiseasesModule } from './diseases/diseases.module';
import { MarketAnalysisModule } from './market-analysis/market-analysis.module';
import { PlantationModule } from './plantation/plantation.module';
import { CropTypesModule } from './crop-types/crop-types.module';
import { WeatherModule } from './weather/weather.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { SoilDataModule } from './soil-data/soil-data.module';
import { HarvestRecordsModule } from './harvest-records/harvest-records.module';
import { FeedbackModule } from './feedback/feedback.module';
import { NotificationModule } from './notification/notification.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    AuthModule,
    UsersModule,
    DiseasesModule,
    MarketAnalysisModule,
    PlantationModule,
    CropTypesModule,
    WeatherModule,
    RecommendationsModule,
    SoilDataModule,
    HarvestRecordsModule,
    FeedbackModule,
    NotificationModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
