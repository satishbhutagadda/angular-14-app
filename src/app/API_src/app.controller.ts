import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello-world')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/users')
  getUsers(): any[] {
    return this.appService.getUsers();
  }
}
