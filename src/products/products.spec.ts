import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

describe('ProductsController', () => {
  let controller: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            getAllProducts: jest.fn(),
            getProductById: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllProducts', () => {
    it('should return an array of products', async () => {
      const products: Product[] = [
        {
          id: 1,
          name: 'Product A',
          description: 'Description of Product A',
          price: 19.99,
          stock: 100,
        },
        {
          id: 2,
          name: 'Product B',
          description: 'Description of Product B',
          price: 29.99,
          stock: 50,
        },
      ];

      jest.spyOn(productsService, 'getAllProducts').mockResolvedValue(products);

      expect(await controller.getAllProducts()).toBe(products);
    });
  });

  describe('getProductById', () => {
    it('should return a single product by ID', async () => {
      const product: Product = {
        id: 1,
        name: 'Product A',
        description: 'Description of Product A',
        price: 19.99,
        stock: 100,
      };

      jest.spyOn(productsService, 'getProductById').mockResolvedValue(product);

      expect(await controller.getProductById(1)).toBe(product);
    });

    it('should return null if product not found', async () => {
      jest.spyOn(productsService, 'getProductById').mockResolvedValue(null);

      expect(await controller.getProductById(999)).toBeNull();
    });
  });

});
