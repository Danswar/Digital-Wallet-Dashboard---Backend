import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, timestamp } from 'rxjs';

@Injectable()
export class OnChainDataService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  private getApiKey() {
    return this.configService.get<string>('ETHERSCAN_APIKEY');
  }

  private async getAddressBalance(walletAddress: string) {
    const requestObservable = this.httpService.get(
      `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${this.getApiKey()}`,
    );
    const {
      data: { result },
    } = await firstValueFrom(requestObservable);

    return result;
  }

  private async getAddressOldestTransactions(walletAddress: string) {
    const requestObservable = this.httpService.get(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${this.getApiKey()}`,
    );
    const {
      data: { result },
    } = await firstValueFrom(requestObservable);

    return result;
  }

  async getAddressDetails(walletAddress: string) {
    const balance = await this.getAddressBalance(walletAddress);
    const [{ timeStamp, hash }] =
      await this.getAddressOldestTransactions(walletAddress);

    return { balance, firstTxSeen: { timestamp: timeStamp, hash } };
  }
}
