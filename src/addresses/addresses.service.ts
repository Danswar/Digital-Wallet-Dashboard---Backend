import { Injectable } from '@nestjs/common';
import { OnChainDataService } from 'src/addresses/on-chain-data.service';

@Injectable()
export class AddressesService {
  constructor(private onChainDataService: OnChainDataService) {}

  async getAddress(walletAddress: string) {
    return this.onChainDataService.getAddressDetails(walletAddress);
  }
}
