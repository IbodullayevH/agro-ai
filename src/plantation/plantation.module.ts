import { Module } from '@nestjs/common';
import { PlantationService } from './plantation.service';
import { PlantationController } from './plantation.controller';

@Module({
  controllers: [PlantationController],
  providers: [PlantationService],
})
export class PlantationModule {}
