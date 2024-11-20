import { Module } from '@nestjs/common';
import { SoilDataService } from './soil-data.service';
import { SoilDataController } from './soil-data.controller';

@Module({
  controllers: [SoilDataController],
  providers: [SoilDataService],
})
export class SoilDataModule {}
