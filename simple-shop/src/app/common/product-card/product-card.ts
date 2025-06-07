import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '@models/product.model';
import {CurrencyPipe, NgOptimizedImage, PercentPipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    NgOptimizedImage,
    UpperCasePipe
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product!: Product;
  @Input() status: 'available' | 'inCart' | 'owned' = 'available';
  @Input() action!: (product: Product) => void;


  onCLick(): void {
    this.action(this.product);
  }
}
