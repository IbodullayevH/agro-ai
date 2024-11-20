import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoilDataService } from './soil-data.service';
import { CreateSoilDatumDto } from './dto/create-soil-datum.dto';
import { UpdateSoilDatumDto } from './dto/update-soil-datum.dto';

@Controller('soil-data')
export class SoilDataController {
  constructor(private readonly soilDataService: SoilDataService) {}

  @Post()
  create(@Body() createSoilDatumDto: CreateSoilDatumDto) {
    return this.soilDataService.create(createSoilDatumDto);
  }

  @Get()
  findAll() {
    return this.soilDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soilDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoilDatumDto: UpdateSoilDatumDto) {
    return this.soilDataService.update(+id, updateSoilDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soilDataService.remove(+id);
  }
}
