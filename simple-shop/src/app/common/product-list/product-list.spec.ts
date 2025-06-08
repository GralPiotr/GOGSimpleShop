import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductList } from './product-list';
import { Product } from '@models/product.model';
import { ProductCard } from '../product-card/product-card';
import { JsonPipe } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('ProductList', () => {
  let fixture: ComponentFixture<ProductList>;
  let component: ProductList;

  const mockProducts: Product[] = Array.from({ length: 10 }, (_, i) => ({
    id: `${i + 1}`,
    name: `Product ${i + 1}`,
    price: 10 + i,
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList, ProductCard, JsonPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    component.products = mockProducts;
    component.cart = [mockProducts[0], mockProducts[1]];
    component.action = jasmine.createSpy('action');
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initially show 5 products', () => {
    expect(component.visibleProducts.length).toBe(5);
  });

  it('should show more products after clicking Show more', () => {
    component.products = mockProducts;
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('.show-more'));
    expect(button).toBeTruthy();

    button.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.visibleProducts.length).toBe(10);
  });

  it('should correctly determine inCart status', () => {
    const status = component.getStatus(mockProducts[0]);
    expect(status).toBe('inCart');
  });

  it('should correctly determine available status', () => {
    const status = component.getStatus(mockProducts[5]);
    expect(status).toBe('available');
  });

  it('should render product cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('app-product-card'));
    expect(cards.length).toBe(5); //
  });
});
