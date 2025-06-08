import {Component, Input, Signal} from '@angular/core';
import {Product} from '@models/product.model';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {FallbackImg} from '../../directives/fallback-img';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, NgOptimizedImage, FallbackImg],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',

})
export class Cart {
  @Input({ required: true }) products!: Signal<Product[]>;
  @Input({ required: true }) quantity!: Signal<number>;
  @Input({ required: true }) totalPrice!: Signal<number>;
  @Input({ required: true }) clearCart!: () => void;
  @Input({ required: true }) removeFromCart!: (product:Product)=>void;

  discountedPrice(product: Product): number {
    return product.price * (1 - (product.discount ?? 0) / 100);
  }


}
