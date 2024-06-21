import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma,Order } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.client.user.create({ data });
  }

  async findUserById(id: number): Promise<User | null> {
    return this.prisma.client.user.findUnique({ where: { id } });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.client.user.findUnique({ where: { email } });
  }

  async getOrderHistory(userId: number): Promise<Order[]> {
    return this.prisma.client.order.findMany({
      where: { userId },
      include: { orderItems: true },
    });
  }

}
