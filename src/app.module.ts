import { Module } from '@nestjs/common';
import { PriceModule } from './price/price.module';
import { AddressesModule } from './addresses/addresses.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PriceModule,
    AddressesModule,
  ],
})
export class AppModule {}
