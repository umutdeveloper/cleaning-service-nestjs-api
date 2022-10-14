import { Test, TestingModule } from '@nestjs/testing';
import { InstagramApplicationsService } from './instagram-applications.service';

describe('InstagramApplicationsService', () => {
  let service: InstagramApplicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstagramApplicationsService],
    }).compile();

    service = module.get<InstagramApplicationsService>(
      InstagramApplicationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
