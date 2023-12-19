import { Module } from '@nestjs/common';
import { PriceModule } from './price/price.module';
import { AddressesModule } from './addresses/addresses.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TrackedWalletsModule } from './tracked-wallets/tracked-wallets.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PriceModule,
    AddressesModule,
    UserModule,
    TrackedWalletsModule,
  ],
})
export class AppModule {}
