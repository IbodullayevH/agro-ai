import { Test, TestingModule } from '@nestjs/testing';
import { SoilDataService } from './soil-data.service';

describe('SoilDataService', () => {
  let service: SoilDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoilDataService],
    }).compile();

    service = module.get<SoilDataService>(SoilDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
