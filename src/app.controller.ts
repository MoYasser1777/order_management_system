import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  getHello: any;
  @Get()
  getRoot() {
    return { message: 'Welcome to the Order Management System API' };
  }
}
