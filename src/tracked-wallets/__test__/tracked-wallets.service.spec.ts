import { Test, TestingModule } from '@nestjs/testing';
import { TrackedWalletsService } from '../tracked-wallets.service';

describe('TrackedWalletsService', () => {
  let service: TrackedWalletsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrackedWalletsService],
    }).compile();

    service = module.get<TrackedWalletsService>(TrackedWalletsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
