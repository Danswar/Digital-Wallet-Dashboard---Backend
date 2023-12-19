import { Controller, Get, Headers } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserPreferencesController {
  constructor(private UserService: UserService) {}

  @Get()
  getUser(@Headers('X-User-Id') userId: string) {
    if (!userId) {
      return this.UserService.createUser();
    }
    return this.UserService.getUser(userId);
  }
}
