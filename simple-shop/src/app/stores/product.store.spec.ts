import { TestBed } from '@angular/core/testing';

import { ProductStore } from './product.store';

describe('ProductStore', () => {
  let service: ProductStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
