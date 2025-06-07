import {Component, Input, Signal} from '@angular/core';
import {Product} from '@models/product.model';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, NgOptimizedImage],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',

})
export class Cart {
  @Input({ required: true }) products!: Signal<Product[]>;
  @Input({ required: true }) quantity!: Signal<number>;
  @Input({ required: true }) totalPrice!: Signal<number>;
  @Input({ required: true }) clearCart!: () => void;


}
