import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './carts.controller';
import { CartService } from './carts.service';
import { CartItem } from '@prisma/client';

describe('CartController', () => {
  let controller: CartController;
  let cartService: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        {
          provide: CartService,
          useValue: {
            addToCart: jest.fn(),
            getCart: jest.fn(),
            updateCartItemQuantity: jest.fn(),
            removeFromCart: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CartController>(CartController);
    cartService = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('addToCart', () => {
    it('should add item to cart', async () => {
      const data = { userId: 1, productId: 1, quantity: 2 };
      const cartItem: CartItem = {
        id: 1,
        cartId: data.userId,
        productId: data.productId,
        quantity: data.quantity,
      };

      jest.spyOn(cartService, 'addToCart').mockResolvedValue(cartItem);

      expect(await controller.addToCart(data)).toBe(cartItem);
    });
  });

  describe('viewCart', () => {
    it('should view user cart', async () => {
      const userId = '1';
      const cartItems: CartItem[] = [
        {
          id: 1,
          cartId: parseInt(userId, 10),
          productId: 1,
          quantity: 2,
        },
      ];

      jest.spyOn(cartService, 'getCart').mockResolvedValue(cartItems);

      expect(await controller.viewCart(userId)).toBe(cartItems);
    });
  });

  describe('updateCartItemQuantity', () => {
    it('should update cart item quantity', async () => {
      const data = { cartItemId: 1, quantity: 3 };
      const updatedCartItem: CartItem = {
        id: data.cartItemId,
        cartId: 1,
        productId: 1,
        quantity: data.quantity,
      };

      jest.spyOn(cartService, 'updateCartItemQuantity').mockResolvedValue(updatedCartItem);

      expect(await controller.updateCartItemQuantity(data)).toBe(updatedCartItem);
    });
  });

  describe('removeFromCart', () => {
    it('should remove item from cart', async () => {
      const cartItemId = '1';

      jest.spyOn(cartService, 'removeFromCart').mockResolvedValue();

      await expect(controller.removeFromCart(cartItemId)).resolves.toBeUndefined();
    });
  });


});
