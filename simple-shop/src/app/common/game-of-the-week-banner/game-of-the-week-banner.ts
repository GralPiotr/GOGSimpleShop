import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '@models/product.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-game-of-the-week-banner',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './game-of-the-week-banner.html',
  styleUrl: './game-of-the-week-banner.scss'
})
export class GameOfTheWeekBanner {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  onClick() {

    this.addToCart.emit(this.product);
  }
}
