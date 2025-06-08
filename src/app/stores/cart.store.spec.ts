import {CartStore} from './cart.store';
import {CartService} from '@services/cart.service';
import {Product} from '@models/product.model';

describe('CartStore', () => {
  let store: CartStore;
  let mockCartService: jasmine.SpyObj<CartService>;

  const mockProduct1: Product = {
    id: '1',
    name: 'Cyberpunk 2077',
    price: 59.99,
    discount: 40,
    imgUrl: '',
  };

  const mockProduct2: Product = {
    id: '2',
    name: 'Wiedźmin 3',
    price: 49.99,
    imgUrl: '',
  };

  beforeEach(() => {
    mockCartService = jasmine.createSpyObj<CartService>('CartService', ['loadCart', 'saveCart', 'clearCart']);
    mockCartService.loadCart.and.returnValue([]);

    store = new CartStore(mockCartService);
  });

  it('should initialize cart from service', () => {
    expect(mockCartService.loadCart).toHaveBeenCalled();
    expect(store.cart()).toEqual([]);
  });

  it('should add product to cart and save to service', () => {
    store.addToCart(mockProduct1);
    expect(store.cart()).toEqual([mockProduct1]);
    expect(mockCartService.saveCart).toHaveBeenCalledWith([mockProduct1]);
  });

  it('should not add product twice', () => {
    store.addToCart(mockProduct1);
    store.addToCart(mockProduct1);
    expect(store.cart()).toEqual([mockProduct1]);
    expect(mockCartService.saveCart).toHaveBeenCalledTimes(1);
  });

  it('should remove product from cart', () => {
    store.addToCart(mockProduct1);
    store.addToCart(mockProduct2);

    store.removeFromCart(mockProduct1);
    expect(store.cart()).toEqual([mockProduct2]);
    expect(mockCartService.saveCart).toHaveBeenCalledWith([mockProduct2]);
  });

  it('should clear the cart', () => {
    store.addToCart(mockProduct1);
    store.clearCart();
    expect(store.cart()).toEqual([]);
    expect(mockCartService.clearCart).toHaveBeenCalled();
  });

  it('should correctly compute cart size', () => {
    expect(store.cartSize()).toBe(0);
    store.addToCart(mockProduct1);
    expect(store.cartSize()).toBe(1);
  });

  it('should compute discounted cart total correctly', () => {
    store.addToCart(mockProduct1); // 59.99 - 40% = 35.99
    store.addToCart(mockProduct2); // 49.99
    expect(store.cartTotal()).toBeCloseTo(35.99 + 49.99, 2);
  });
});
