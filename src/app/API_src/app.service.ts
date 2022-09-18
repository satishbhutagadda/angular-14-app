import { Injectable } from '@nestjs/common';

const userData = [
  {userID: 1, firstName: 'test', lastName: 'user1'},
  {userID: 2, firstName: 'test', lastName: 'user2'}
];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): any[] {
    return userData
  }
}
