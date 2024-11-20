import { PartialType } from '@nestjs/swagger';
import { CreateHarvestRecordDto } from './create-harvest-record.dto';

export class UpdateHarvestRecordDto extends PartialType(CreateHarvestRecordDto) {}
