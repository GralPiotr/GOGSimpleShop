import {TestBed} from '@angular/core/testing';
import {ProductService} from './product.service';
import {Product} from '@models/product.model';
import {MOCK_PRODUCTS} from '../mock-data/products.data';
import {fakeAsync, tick} from '@angular/core/testing';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products after delay', fakeAsync(() => {
    let result: Product[] = [];

    service.getProducts().subscribe(data => {
      result = data;
    });

    tick(1500);

    expect(result).toEqual(MOCK_PRODUCTS);
    expect(result.length).toBeGreaterThan(0);
  }));
});
