import { Injectable } from '@nestjs/common';
import { DataBaseService } from '../db/db.service';

@Injectable()
export class TrackedWalletsService {
  constructor(private dataBaseService: DataBaseService) {}

  async getTrackedWallets(userId: string) {
    return this.dataBaseService.getClient().trackedWallet.findMany({
      where: {
        userId,
      },
    });
  }

  async getTrackedWalletData(userId: string, address: string) {
    const wallet = await this.dataBaseService
      .getClient()
      .trackedWallet.findUnique({
        where: { address_userId: { userId, address } },
      });

    if (!wallet) {
      return { isTracked: false };
    }
    return wallet;
  }

  async trackWallet(userId: string, address: string, isFavorite: boolean) {
    const trackedWallet = await this.dataBaseService
      .getClient()
      .trackedWallet.upsert({
        create: {
          address,
          isFavorite,
          userId,
          isTracked: true,
        },
        update: {
          isFavorite,
        },
        where: {
          address_userId: {
            userId,
            address: address,
          },
        },
      });

    return trackedWallet;
  }

  untrackWallet(userId: string, address: string) {
    return this.dataBaseService.getClient().trackedWallet.delete({
      where: {
        address_userId: {
          userId,
          address,
        },
      },
    });
  }
}
