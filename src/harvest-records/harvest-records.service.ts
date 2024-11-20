import { Injectable } from '@nestjs/common';
import { CreateHarvestRecordDto } from './dto/create-harvest-record.dto';
import { UpdateHarvestRecordDto } from './dto/update-harvest-record.dto';

@Injectable()
export class HarvestRecordsService {
  create(createHarvestRecordDto: CreateHarvestRecordDto) {
    return 'This action adds a new harvestRecord';
  }

  findAll() {
    return `This action returns all harvestRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} harvestRecord`;
  }

  update(id: number, updateHarvestRecordDto: UpdateHarvestRecordDto) {
    return `This action updates a #${id} harvestRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} harvestRecord`;
  }
}
