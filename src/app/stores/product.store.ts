import {Injectable, signal} from '@angular/core';
import {Product} from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  private readonly _products = signal<Product[]>([]);

  readonly products = this._products;


  setProducts(products: Product[]): void {
    this._products.set(products);
  }
  constructor() { }
}
