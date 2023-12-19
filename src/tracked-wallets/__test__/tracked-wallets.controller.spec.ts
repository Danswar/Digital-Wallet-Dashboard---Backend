import { Test, TestingModule } from '@nestjs/testing';
import { TrackedWalletsController } from '../tracked-wallets.controller';

describe('TrackedWalletsController', () => {
  let controller: TrackedWalletsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrackedWalletsController],
    }).compile();

    controller = module.get<TrackedWalletsController>(TrackedWalletsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
