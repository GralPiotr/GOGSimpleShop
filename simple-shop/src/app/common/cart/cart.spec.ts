import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cart } from './cart';
import { signal } from '@angular/core';
import { Product } from '@models/product.model';

describe('Cart Component', () => {
  let component: Cart;
  let fixture: ComponentFixture<Cart>;

  const mockProducts: Product[] = [
    { id: '1', name: 'Test Game 1', price: 50, discount: 20, imgUrl:'test1.url' },
    { id: '2', name: 'Test Game 2', price: 100, imgUrl:'test2.url' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Cart],
    });

    fixture = TestBed.createComponent(Cart);
    component = fixture.componentInstance;

    component.products = signal(mockProducts);
    component.quantity = signal(2);
    component.totalPrice = signal(130);
    component.clearCart = jasmine.createSpy('clearCart');
    component.removeFromCart = jasmine.createSpy('removeFromCart');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate discounted price correctly', () => {
    const discounted = component.discountedPrice(mockProducts[0]);
    expect(discounted).toBe(40);
  });

  it('should return full price if no discount is provided', () => {
    const fullPrice = component.discountedPrice(mockProducts[1]);
    expect(fullPrice).toBe(100);
  });

  it('should call clearCart method', () => {
    component.clearCart();
    expect(component.clearCart).toHaveBeenCalled();
  });

  it('should call removeFromCart with correct product', () => {
    component.removeFromCart(mockProducts[0]);
    expect(component.removeFromCart).toHaveBeenCalledWith(mockProducts[0]);
  });
});
