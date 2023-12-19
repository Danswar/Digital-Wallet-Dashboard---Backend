import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
} from '@nestjs/common';
import { TrackedWallet } from '@prisma/client';
import { TrackedWalletsService } from './tracked-wallets.service';

@Controller('tracked-wallets')
export class TrackedWalletsController {
  constructor(private trackedWallet: TrackedWalletsService) {}

  @Get()
  getTrackedWallets(@Headers('X-User-Id') userId: string) {
    return this.trackedWallet.getTrackedWallets(userId);
  }

  @Get(':address')
  getTrackedWallet(
    @Headers('X-User-Id') userId: string,
    @Param('address') address: string,
  ) {
    return this.trackedWallet.getTrackedWalletData(userId, address);
  }

  @Post()
  addTrackedWallet(
    @Headers('X-User-Id') userId: string,
    @Body() trackedWallet: TrackedWallet,
  ) {
    const { address, isFavorite } = trackedWallet;
    return this.trackedWallet.trackWallet(userId, address, isFavorite);
  }

  @Delete(':address')
  deleteTrackedWallet(
    @Headers('X-User-Id') userId: string,
    @Param('address') address: string,
  ) {
    return this.trackedWallet.untrackWallet(userId, address);
  }
}
