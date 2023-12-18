import { Injectable } from '@nestjs/common';
import { OnChainDataService } from 'src/addresses/on-chain-data.service';

@Injectable()
export class AddressesService {
  constructor(private onChainDataService: OnChainDataService) {}

  async getAddress(walletAddress: string) {
    const onChainData =
      await this.onChainDataService.getAddressDetails(walletAddress);

    // TODO: aggregate with user preferences
    const userPreferences = {
      isFavorite: false,
    };

    return { ...onChainData, ...userPreferences };
  }
}
