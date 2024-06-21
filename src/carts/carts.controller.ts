import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CartService } from './carts.service';
import { CartItem } from '@prisma/client';

@Controller('api/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  addToCart(@Body() data: { userId: number; productId: number; quantity: number }): Promise<CartItem> {
    return this.cartService.addToCart(data.userId, data.productId, data.quantity);
  }

  @Get(':userId')
  viewCart(@Param('userId') userId: string): Promise<CartItem[]> {
    return this.cartService.getCart(parseInt(userId,10));
  }

  @Put('update')
  updateCartItemQuantity(@Body() data: { cartItemId: number; quantity: number }): Promise<CartItem> {
    return this.cartService.updateCartItemQuantity(data.cartItemId, data.quantity);
  }

  @Delete('remove/:cartItemId')
  removeFromCart(@Param('cartItemId') cartItemId: string): Promise<void> {
    return this.cartService.removeFromCart(parseInt(cartItemId,10));
  }
}
