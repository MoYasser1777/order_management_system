import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User,Order } from '@prisma/client';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() userData: { name: string; email: string; password: string }): Promise<User> {
    return this.usersService.createUser(userData);
  }

  @Get(':userId')
  findUserById(@Param('userId') userId: string): Promise<User | null> {
    return this.usersService.findUserById(parseInt(userId,10));
  }

  @Get(':userId/orders')
  getOrderHistory(@Param('userId') userId: string): Promise<Order[]> {
    return this.usersService.getOrderHistory(parseInt(userId, 10));
  }
}
