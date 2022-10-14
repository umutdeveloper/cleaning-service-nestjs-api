import { Test, TestingModule } from '@nestjs/testing';
import { CleaningMachinesService } from './cleaning-machines.service';

describe('CleaningMachinesService', () => {
  let service: CleaningMachinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CleaningMachinesService],
    }).compile();

    service = module.get<CleaningMachinesService>(CleaningMachinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
