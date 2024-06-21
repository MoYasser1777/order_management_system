import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from '@prisma/client';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() data: { userId: number; products: { productId: number; quantity: number }[] }): Promise<Order> {
    return this.ordersService.createOrder(data.userId, data.products);
  }

  @Get(':orderId')
  getOrderById(@Param('orderId') orderId: string): Promise<Order | null> {
    return this.ordersService.getOrderById(parseInt(orderId,10));
  }

  @Put(':orderId/status')
  updateOrderStatus(@Param('orderId') orderId: string, @Body('status') status: string): Promise<Order> {
    return this.ordersService.updateOrderStatus(parseInt(orderId,10), status);
  }

  @Post('apply-coupon')
  applyCoupon(@Body() data: { orderId: number; couponCode: string }): Promise<Order> {
    return this.ordersService.applyCoupon(data.orderId, data.couponCode);
  }
}
