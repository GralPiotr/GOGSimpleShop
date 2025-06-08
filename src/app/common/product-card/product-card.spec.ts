import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from '@models/product.model';
import { By } from '@angular/platform-browser';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  const mockProduct: Product = {
    id: '123',
    name: 'Mock Game',
    price: 49.99,
    discount: 20,
    imgUrl: 'https://example.com/mock.jpg'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductCard, CurrencyPipe, UpperCasePipe]
    });

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;

    component.product = mockProduct;
    component.status = 'available';
    component.action = jasmine.createSpy('action');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display product name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('MOCK GAME');
  });

  it('should display product price', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('$49.99');
  });

  it('should call action with product when clicked', () => {
    const clickable = fixture.debugElement.query(By.css('.actions button'));
    clickable.triggerEventHandler('click');
    expect(component.action).toHaveBeenCalledWith(mockProduct);
  });

  it('should show correct status', () => {
    component.status = 'inCart';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('IN CART');
  });

  it('should show "Owned" when product.isOwned is true', () => {
    component.product = {
      ...mockProduct,
      isOwned: true
    };
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('OWNED');
  });
});
