import { Test, TestingModule } from '@nestjs/testing';
import { HarvestRecordsController } from './harvest-records.controller';
import { HarvestRecordsService } from './harvest-records.service';

describe('HarvestRecordsController', () => {
  let controller: HarvestRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HarvestRecordsController],
      providers: [HarvestRecordsService],
    }).compile();

    controller = module.get<HarvestRecordsController>(HarvestRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
