import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/db/db.service';

@Injectable()
export class UserService {
  constructor(private dataBaseService: DataBaseService) {}

  async createUser() {
    const user = await this.dataBaseService.getClient().user.create({
      data: {},
    });
    return user;
  }

  async getUser(userId: string) {
    const user = await this.dataBaseService.getClient().user.findFirst({
      where: {
        id: userId,
      },
    });
    return user;
  }
}
