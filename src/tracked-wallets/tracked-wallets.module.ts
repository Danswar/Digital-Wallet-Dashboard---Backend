import { Module } from '@nestjs/common';
import { TrackedWalletsController } from './tracked-wallets.controller';
import { DataBaseService } from 'src/db/db.service';
import { TrackedWalletsService } from './tracked-wallets.service';

@Module({
  controllers: [TrackedWalletsController],
  providers: [DataBaseService, TrackedWalletsService],
})
export class TrackedWalletsModule {}
