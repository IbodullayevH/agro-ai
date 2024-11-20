import { Module } from '@nestjs/common';
import { CropTypesService } from './crop-types.service';
import { CropTypesController } from './crop-types.controller';

@Module({
  controllers: [CropTypesController],
  providers: [CropTypesService],
})
export class CropTypesModule {}
