import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {Home} from './home';
import {ProductList} from '../common/product-list/product-list';
import {GameOfTheWeekBanner} from '../common/game-of-the-week-banner/game-of-the-week-banner';
import {ProductStore} from '@stores/product.store';
import {CartStore} from '@stores/cart.store';
import {ProductService} from '@services/product.service';
import {delay, of} from 'rxjs';
import {MOCK_PRODUCTS} from '../mock-data/products.data';
import {CommonModule} from '@angular/common';


describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;
  let productStore: ProductStore;
  let cartStore: CartStore;

  beforeEach(async () => {
    const productServiceMock = jasmine.createSpyObj('ProductService', ['getProducts']);

    await TestBed.configureTestingModule({
      imports: [CommonModule, ProductList, GameOfTheWeekBanner, Home],
      providers: [
        ProductStore,
        CartStore,
        {provide: ProductService, useValue: productServiceMock}
      ],
      declarations: []
    }).compileComponents();

    productServiceSpy = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
    productStore = TestBed.inject(ProductStore);
    cartStore = TestBed.inject(CartStore);

    productServiceSpy.getProducts.and.returnValue(of(MOCK_PRODUCTS).pipe(delay(0)));

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load products and set isLoading to false', fakeAsync(() => {
    const fixture = TestBed.createComponent(Home);
    const component = fixture.componentInstance;

    expect(component.isLoading()).toBeTrue();

    tick();
    fixture.detectChanges();

    expect(component.isLoading()).toBeFalse();
    expect(component.products.length).toBeGreaterThan(0);
  }));

  it('should return featured product if available', () => {

    component._productStore.setProducts(MOCK_PRODUCTS);

    const featured = component.featuredProduct();
    expect(featured?.isFeatured).toBeTrue();
  });

  it('should return first product if no featured is found', () => {
    component._productStore.setProducts(MOCK_PRODUCTS.map(p => ({...p, isFeatured: false})));
    const fallback = component.featuredProduct();
    expect(fallback).toEqual(component.products[0]);
  });

});
