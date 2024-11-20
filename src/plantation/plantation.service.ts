import { Injectable } from '@nestjs/common';
import { CreatePlantationDto } from './dto/create-plantation.dto';
import { UpdatePlantationDto } from './dto/update-plantation.dto';

@Injectable()
export class PlantationService {
  create(createPlantationDto: CreatePlantationDto) {
    return 'This action adds a new plantation';
  }

  findAll() {
    return `This action returns all plantation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plantation`;
  }

  update(id: number, updatePlantationDto: UpdatePlantationDto) {
    return `This action updates a #${id} plantation`;
  }

  remove(id: number) {
    return `This action removes a #${id} plantation`;
  }
}
