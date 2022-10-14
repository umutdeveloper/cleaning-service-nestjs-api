import { Test, TestingModule } from '@nestjs/testing';
import { CommunicationChannelsService } from './communication-channels.service';

describe('CommunicationChannelsService', () => {
  let service: CommunicationChannelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommunicationChannelsService],
    }).compile();

    service = module.get<CommunicationChannelsService>(
      CommunicationChannelsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
