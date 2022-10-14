import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappApplicationsService } from './whatsapp-applications.service';

describe('WhatsappApplicationsService', () => {
  let service: WhatsappApplicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhatsappApplicationsService],
    }).compile();

    service = module.get<WhatsappApplicationsService>(
      WhatsappApplicationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
