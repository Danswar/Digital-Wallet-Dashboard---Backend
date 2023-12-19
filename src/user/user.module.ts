import { Module } from '@nestjs/common';
import { UserPreferencesController } from './user.controller';
import { UserService } from './user.service';
import { DataBaseService } from 'src/db/db.service';

@Module({
  controllers: [UserPreferencesController],
  providers: [DataBaseService, UserService],
})
export class UserModule {}
