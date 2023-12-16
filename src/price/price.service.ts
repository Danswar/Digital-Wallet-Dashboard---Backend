import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PriceService {
  constructor(private readonly httpService: HttpService) {}

  async getAllPrices() {
    const requestObservable = this.httpService.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd%2Ceur`,
    );
    const response = await firstValueFrom(requestObservable);
    return response.data;
  }

  async getPrice(coinId: string) {
    const requestObservable = this.httpService.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd%2Ceur`,
    );
    const response = await firstValueFrom(requestObservable);
    return response.data[coinId];
  }
}
