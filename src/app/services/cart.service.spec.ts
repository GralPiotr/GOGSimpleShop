import {CartService} from './cart.service';
import {Product} from '@models/product.model';

describe('CartService', () => {
  let service: CartService;
  const CART_KEY = 'app_cart';

  const mockProducts: Product[] = [
    { id: '1', name: 'Wiedźmin 3', price: 49.99, imgUrl: '', isFeatured: true },
    { id: '2', name: 'Hades', price: 19.99, imgUrl: '' }
  ];

  beforeEach(() => {
    service = new CartService();
    sessionStorage.clear();
  });

  it('should save cart to sessionStorage', () => {
    service.saveCart(mockProducts);
    const stored = sessionStorage.getItem(CART_KEY);
    expect(stored).toEqual(JSON.stringify(mockProducts));
  });

  it('should load cart from sessionStorage', () => {
    sessionStorage.setItem(CART_KEY, JSON.stringify(mockProducts));
    const result = service.loadCart();
    expect(result).toEqual(mockProducts);
  });

  it('should return empty array if nothing in sessionStorage', () => {
    const result = service.loadCart();
    expect(result).toEqual([]);
  });

  it('should return empty array if JSON is malformed', () => {
    sessionStorage.setItem(CART_KEY, 'not-valid-json');
    const result = service.loadCart();
    expect(result).toEqual([]);
  });

  it('should clear cart from sessionStorage', () => {
    sessionStorage.setItem(CART_KEY, JSON.stringify(mockProducts));
    service.clearCart();
    expect(sessionStorage.getItem(CART_KEY)).toBeNull();
  });
});
