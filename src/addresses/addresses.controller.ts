import { Controller, Get, Param } from '@nestjs/common';
import { AddressesService } from './addresses.service';

@Controller('addresses')
export class AddressesController {
  constructor(private addressesService: AddressesService) {}

  @Get(':walletAddress')
  getAddress(@Param('walletAddress') walletAddress: string) {
    return this.addressesService.getAddress(walletAddress);
  }
}
