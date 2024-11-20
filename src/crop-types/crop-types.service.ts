import { Injectable } from '@nestjs/common';
import { CreateCropTypeDto } from './dto/create-crop-type.dto';
import { UpdateCropTypeDto } from './dto/update-crop-type.dto';

@Injectable()
export class CropTypesService {
  create(createCropTypeDto: CreateCropTypeDto) {
    return 'This action adds a new cropType';
  }

  findAll() {
    return `This action returns all cropTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cropType`;
  }

  update(id: number, updateCropTypeDto: UpdateCropTypeDto) {
    return `This action updates a #${id} cropType`;
  }

  remove(id: number) {
    return `This action removes a #${id} cropType`;
  }
}
