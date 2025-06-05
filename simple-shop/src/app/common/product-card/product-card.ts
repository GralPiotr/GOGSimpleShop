import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '@models/product.model';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    NgOptimizedImage
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product!: Product;
  @Input() status: 'available' | 'inCart' | 'owned' = 'available';
  @Input() action!: (product: Product) => void;
  @Output() productChanged = new EventEmitter<Product>();

  onCLick(): void {
    this.productChanged.emit(this.product);
    // this.action(this.product);
  }
}
