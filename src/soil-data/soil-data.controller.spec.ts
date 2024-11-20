import { Test, TestingModule } from '@nestjs/testing';
import { SoilDataController } from './soil-data.controller';
import { SoilDataService } from './soil-data.service';

describe('SoilDataController', () => {
  let controller: SoilDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoilDataController],
      providers: [SoilDataService],
    }).compile();

    controller = module.get<SoilDataController>(SoilDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
