import {Component, Input} from '@angular/core';
import {Product} from '@models/product.model';
import {CurrencyPipe, NgOptimizedImage, UpperCasePipe} from '@angular/common';
import {FallbackImg} from '../../directives/fallback-img';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    NgOptimizedImage,
    UpperCasePipe,
    FallbackImg,
    FallbackImg
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
