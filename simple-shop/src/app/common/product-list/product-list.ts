import {Component, EventEmitter, Input, Output, Signal} from '@angular/core';
import {Product} from '@models/product.model';
import {ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  @Input({required:true}) products!: Signal<Product[]>;
  @Input({required:true}) cart!: Signal<Product[]>;
  getStatus(product: Product): 'inCart' | 'available' {
    return this.cart().some(p => p.id === product.id) ? 'inCart' : 'available';
  }
  @Output() action = new EventEmitter<Product>();
  protected readonly outerWidth = outerWidth;
}
