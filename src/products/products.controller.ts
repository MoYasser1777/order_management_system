// products.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':productId')
  getProductById(@Param('productId') productId: number): Promise<Product | null> {
    return this.productsService.getProductById(productId);
  }
}
