import { PartialType } from '@nestjs/swagger';
import { CreatePlantationDto } from './create-plantation.dto';

export class UpdatePlantationDto extends PartialType(CreatePlantationDto) {}
