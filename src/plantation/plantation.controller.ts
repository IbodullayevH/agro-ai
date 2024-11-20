import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlantationService } from './plantation.service';
import { CreatePlantationDto } from './dto/create-plantation.dto';
import { UpdatePlantationDto } from './dto/update-plantation.dto';

@Controller('plantation')
export class PlantationController {
  constructor(private readonly plantationService: PlantationService) {}

  @Post()
  create(@Body() createPlantationDto: CreatePlantationDto) {
    return this.plantationService.create(createPlantationDto);
  }

  @Get()
  findAll() {
    return this.plantationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantationDto: UpdatePlantationDto) {
    return this.plantationService.update(+id, updatePlantationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantationService.remove(+id);
  }
}
