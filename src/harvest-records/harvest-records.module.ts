import { Module } from '@nestjs/common';
import { HarvestRecordsService } from './harvest-records.service';
import { HarvestRecordsController } from './harvest-records.controller';

@Module({
  controllers: [HarvestRecordsController],
  providers: [HarvestRecordsService],
})
export class HarvestRecordsModule {}
