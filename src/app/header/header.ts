import {Component, HostListener, Signal, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CartStore} from '@stores/cart.store';
import {Product} from '@models/product.model';
import {Cart} from '../common/cart/cart';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    Cart
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isCartOpen = signal(false);
  cartSize: Signal<number> = signal<number>(0)
  clearCart!: () => void;
  removeProduct!: (product: Product) => void;

  constructor(private _cartStore: CartStore
  ) {
    this.cartSize = this._cartStore.cartSize;
    this.clearCart = this._cartStore.clearCart;
    this.removeProduct = this._cartStore.removeFromCart;
  }

  get totalPrice() {
    return this._cartStore.cartTotal
  }

  get cart() {
    return this._cartStore.cart;
  }

  showCart() {
    this.isCartOpen.update(value => !value);
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.closest('.cart-wrapper')) {
      return;
    }

    this.isCartOpen.set(false);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  @HostListener('document:keydown.escape')
  closeOnEscape() {
    this.isCartOpen.set(false);
  }
}
