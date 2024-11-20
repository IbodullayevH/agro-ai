import { Test, TestingModule } from '@nestjs/testing';
import { HarvestRecordsService } from './harvest-records.service';

describe('HarvestRecordsService', () => {
  let service: HarvestRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HarvestRecordsService],
    }).compile();

    service = module.get<HarvestRecordsService>(HarvestRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
