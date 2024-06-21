import { Module } from '@nestjs/common';
import { CartController } from './carts.controller';
import { CartService } from './carts.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CartController],
  providers: [CartService, PrismaService],
})
export class CartModule {}
