import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order, Prisma, Product } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: number, products: { productId: number; quantity: number }[]): Promise<Order> {
    const user = await this.prisma.client.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    const orderItems = products.map(product => ({
      productId: product.productId,
      quantity: product.quantity,
    }));

    // Calculate total price of the order
    let totalPrice = 0;
    for (const item of orderItems) {
      const product = await this.prisma.client.product.findUnique({
        where: { id: item.productId },
      });
      if (!product) {
        throw new NotFoundException(`Product with ID ${item.productId} not found.`);
      }
      totalPrice += product.price * item.quantity;
    }
  
    const createdOrder = await this.prisma.client.order.create({
      data: {
        orderDate: new Date(),
        status: 'pending', // Initial status
        userId: userId,
        total: totalPrice, 
        orderItems: {
          createMany: {
            data: orderItems,
          },
        },
      },
      include: {
        orderItems: true,
      },
    });

    return createdOrder;
  }

  async getOrderById(orderId: number): Promise<Order | null> {
    const order = await this.prisma.client.order.findUnique({
      where: { id: orderId },
      include: {
        orderItems: {
          include: {
            product: true, 
          },
        },
      },
    });
    if(!order){
      throw new Error('Invalid order id');
    }
    return order;
  }

  async updateOrderStatus(orderId: number, status: string): Promise<Order> {
    const updatedOrder = await this.prisma.client.order.update({
      where: { id: orderId },
      data: { status },
    });
  
    return updatedOrder;
  }

  async applyCoupon(orderId: number, couponCode: string): Promise<Order> {
    const coupon = await this.prisma.client.coupon.findUnique({
      where: { code: couponCode },
    });

    if (!coupon) {
      throw new Error('Invalid coupon code');
    }

    const order = await this.prisma.client.order.findUnique({
      where: { id: orderId },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!order) {
      throw new Error('Order not found');
    }

    const total = order.total;

    const discount = total * (coupon.discount / 100);
    const finalTotal = total - discount;

    return this.prisma.client.order.update({
      where: { id: orderId },
      data: {
        discount: coupon.discount,
        total: finalTotal,
      },
      include: {
        orderItems: true,
      },
    });
  }
  
}

