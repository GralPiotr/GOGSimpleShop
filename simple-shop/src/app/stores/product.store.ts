import {Injectable, signal} from '@angular/core';
import {Product} from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  private readonly _products = signal<Product[]>([]);

  readonly products = this._products;

  readonly featured = signal(
    () => this._products().filter(p => p.isFeatured)
  );

  setProducts(products: Product[]): void {
    this._products.set(products);
  }
  constructor() { }
}
