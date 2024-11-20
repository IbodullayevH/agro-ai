import { PartialType } from '@nestjs/swagger';
import { CreateSoilDatumDto } from './create-soil-datum.dto';

export class UpdateSoilDatumDto extends PartialType(CreateSoilDatumDto) {}
