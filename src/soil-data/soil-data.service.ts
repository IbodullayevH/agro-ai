import { Injectable } from '@nestjs/common';
import { CreateSoilDatumDto } from './dto/create-soil-datum.dto';
import { UpdateSoilDatumDto } from './dto/update-soil-datum.dto';

@Injectable()
export class SoilDataService {
  create(createSoilDatumDto: CreateSoilDatumDto) {
    return 'This action adds a new soilDatum';
  }

  findAll() {
    return `This action returns all soilData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soilDatum`;
  }

  update(id: number, updateSoilDatumDto: UpdateSoilDatumDto) {
    return `This action updates a #${id} soilDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} soilDatum`;
  }
}
