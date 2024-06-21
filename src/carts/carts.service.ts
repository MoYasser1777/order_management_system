// cart.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CartItem, Prisma } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(userId: number, productId: number, quantity: number): Promise<CartItem> {

    const product = await this.prisma.client.product.findUnique({ where: { id: productId } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} not found.`);
    }

    let cart = await this.prisma.client.cart.findUnique({ where: { userId } });

    if (!cart) {
      cart = await this.prisma.client.cart.create({
        data: {
          userId,
        },
      });
    }
    let cartItem = await this.prisma.client.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });

    if (cartItem) {
      cartItem = await this.prisma.client.cartItem.update({
        where: { id: cartItem.id },
        data: {
          quantity: cartItem.quantity + quantity,
        },
      });
    } else {
      cartItem = await this.prisma.client.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }

    return cartItem;
  }

  async getCart(userId: number): Promise<CartItem[]> {
    const cart = await this.prisma.client.cart.findUnique({
      where: { userId },
      include: {
        cartItems: {
          include: {
            product: true, 
          },
        },
      },
    });
  
    return cart ? cart.cartItems : [];
  }

  async updateCartItemQuantity(cartItemId: number, quantity: number): Promise<CartItem> {
    const cartItem = await this.prisma.client.cartItem.update({
      where: { id: cartItemId },
      data: { quantity },
    });
  
    return cartItem;
  }

  async removeFromCart(cartItemId: number): Promise<void> {
    await this.prisma.client.cartItem.delete({
      where: { id: cartItemId },
    });
  }
  
}
