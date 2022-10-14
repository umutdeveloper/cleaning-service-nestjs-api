import { Test, TestingModule } from '@nestjs/testing';
import { CleaningMaterialsService } from './cleaning-materials.service';

describe('CleaningMaterialsService', () => {
  let service: CleaningMaterialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CleaningMaterialsService],
    }).compile();

    service = module.get<CleaningMaterialsService>(CleaningMaterialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
