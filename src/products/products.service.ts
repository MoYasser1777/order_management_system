// products.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product, Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.client.product.findMany();
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.prisma.client.product.findUnique({ where: { id } });
  }
}
