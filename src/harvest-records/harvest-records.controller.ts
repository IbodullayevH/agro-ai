import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HarvestRecordsService } from './harvest-records.service';
import { CreateHarvestRecordDto } from './dto/create-harvest-record.dto';
import { UpdateHarvestRecordDto } from './dto/update-harvest-record.dto';

@Controller('harvest-records')
export class HarvestRecordsController {
  constructor(private readonly harvestRecordsService: HarvestRecordsService) {}

  @Post()
  create(@Body() createHarvestRecordDto: CreateHarvestRecordDto) {
    return this.harvestRecordsService.create(createHarvestRecordDto);
  }

  @Get()
  findAll() {
    return this.harvestRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.harvestRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHarvestRecordDto: UpdateHarvestRecordDto) {
    return this.harvestRecordsService.update(+id, updateHarvestRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.harvestRecordsService.remove(+id);
  }
}
