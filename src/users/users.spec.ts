import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, Order,OrderItem } from '@prisma/client';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            createUser: jest.fn(),
            findUserById: jest.fn(),
            getOrderHistory: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        address: '123 Main St, Anytown',
      };

      const createdUser: User = {
        id: 1,
        ...userData,
      };

      jest.spyOn(service, 'createUser').mockResolvedValue(createdUser);

      expect(await controller.createUser(userData)).toBe(createdUser);
    });
  });

  describe('findUserById', () => {
    it('should find user by ID', async () => {
      const userId = '1';
      const foundUser: User = {
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        address: '123 Main St, Anytown',
      };

      jest.spyOn(service, 'findUserById').mockResolvedValue(foundUser);

      expect(await controller.findUserById(userId)).toBe(foundUser);
    });
  });

  describe('getOrderHistory', () => {
    it('should get order history for user', async () => {
      const userId = '1';
      const orders: Order[] = [
        {
          id: 1,
          orderDate: new Date(),
          status: 'pending',
          userId: 1,
          discount: null,
          total: null,
        },
      ];

      jest.spyOn(service, 'getOrderHistory').mockResolvedValue(orders);

      expect(await controller.getOrderHistory(userId)).toBe(orders);
    });
  });


});
