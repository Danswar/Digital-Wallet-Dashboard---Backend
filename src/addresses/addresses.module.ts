import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { OnChainDataService } from 'src/addresses/on-chain-data.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [OnChainDataService, AddressesService],
  controllers: [AddressesController],
})
export class AddressesModule {}
