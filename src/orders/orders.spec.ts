import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from '@prisma/client';

describe('OrdersController', () => {
  let controller: OrdersController;
  let ordersService: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        {
          provide: OrdersService,
          useValue: {
            createOrder: jest.fn(),
            getOrderById: jest.fn(),
            updateOrderStatus: jest.fn(),
            applyCoupon: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
    ordersService = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createOrder', () => {
    it('should create a new order', async () => {
      const data = {
        userId: 1,
        products: [{ productId: 1, quantity: 2 }],
      };
      const createdOrder: Order = {
        id: 1,
        orderDate: new Date(),
        status: 'pending',
        userId: data.userId,
        discount: null,
        total: null,
      };

      jest.spyOn(ordersService, 'createOrder').mockResolvedValue(createdOrder);

      expect(await controller.createOrder(data)).toBe(createdOrder);
    });
  });

  describe('getOrderById', () => {
    it('should retrieve order by ID', async () => {
      const orderId = '1';
      const foundOrder: Order = {
        id: 1,
        orderDate: new Date(),
        status: 'pending',
        userId: 1,
        discount: null,
        total: null,
      };

      jest.spyOn(ordersService, 'getOrderById').mockResolvedValue(foundOrder);

      expect(await controller.getOrderById(orderId)).toBe(foundOrder);
    });
  });

  describe('updateOrderStatus', () => {
    it('should update order status', async () => {
      const orderId = '1';
      const status = 'shipped';
      const updatedOrder: Order = {
        id: 1,
        orderDate: new Date(),
        status,
        userId: 1,
        discount: null,
        total: null,
      };

      jest.spyOn(ordersService, 'updateOrderStatus').mockResolvedValue(updatedOrder);

      expect(await controller.updateOrderStatus(orderId, status)).toBe(updatedOrder);
    });
  });

  describe('applyCoupon', () => {
    it('should apply coupon to order', async () => {
      const data = { orderId: 1, couponCode: 'FIRST50' };
      const orderWithCoupon: Order = {
        id: 1,
        orderDate: new Date(),
        status: 'pending',
        userId: 1,
        discount: 50,
        total: null,
      };

      jest.spyOn(ordersService, 'applyCoupon').mockResolvedValue(orderWithCoupon);

      expect(await controller.applyCoupon(data)).toBe(orderWithCoupon);
    });
  });

});
