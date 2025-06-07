import {Injectable} from '@angular/core';
import {Product} from '@models/product.model';
import {delay, Observable, of} from 'rxjs';
import {MOCK_PRODUCTS} from '../mock-data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Observable<Product[]> {
    return of(MOCK_PRODUCTS).pipe(delay(1500));
  }
}
