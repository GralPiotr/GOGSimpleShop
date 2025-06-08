import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Header} from './header';
import {CartStore} from '@stores/cart.store';
import {Cart} from '../common/cart/cart';
import {NgOptimizedImage} from '@angular/common';
import {Product} from '@models/product.model';
import {signal} from '@angular/core';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let mockCartStore: jasmine.SpyObj<CartStore>;

  beforeEach(async () => {
    mockCartStore = jasmine.createSpyObj<CartStore>(
      'CartStore',
      ['clearCart', 'removeFromCart'],
      {
        cartSize: signal(2),
        cart: signal<Product[]>([
          { id: '1', name: 'Cyberpunk', price: 59.99 },
          { id: '2', name: 'Wiedźmin 3', price: 39.99 },
        ]),
        cartTotal: signal(99.98)
      }
    );

    await TestBed.configureTestingModule({
      imports: [NgOptimizedImage, Cart, Header],
      providers: [{ provide: CartStore, useValue: mockCartStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show cart when showCart is called', () => {
    expect(component.isCartOpen()).toBeFalse();
    component.showCart();
    expect(component.isCartOpen()).toBeTrue();
  });

  it('should close cart on document click outside cart-wrapper', () => {
    component.isCartOpen.set(true);

    const fakeEvent = new MouseEvent('click');
    Object.defineProperty(fakeEvent, 'target', {
      value: document.createElement('div'),
    });

    component.handleDocumentClick(fakeEvent);
    expect(component.isCartOpen()).toBeFalse();
  });

  it('should not close cart if click is inside cart-wrapper', () => {
    component.isCartOpen.set(true);

    const wrapper = document.createElement('div');
    wrapper.classList.add('cart-wrapper');
    const fakeEvent = new MouseEvent('click');
    Object.defineProperty(fakeEvent, 'target', {
      value: wrapper,
    });

    component.handleDocumentClick(fakeEvent);
    expect(component.isCartOpen()).toBeTrue();
  });

  it('should close cart on escape key press', () => {
    component.isCartOpen.set(true);
    component.closeOnEscape();
    expect(component.isCartOpen()).toBeFalse();
  });

  it('should call stopPropagation on inner click', () => {
    const event = new Event('click');
    spyOn(event, 'stopPropagation');
    component.stopPropagation(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
