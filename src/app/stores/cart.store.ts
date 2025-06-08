import {computed, Injectable, signal} from '@angular/core';
import {Product} from '@models/product.model';
import {CartService} from '@services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private readonly _cart = signal<Product[]>([]);

  readonly cart = computed(() => this._cart());

  readonly cartSize = computed(() => this._cart().length);

  readonly cartTotal = computed(() =>
    this._cart().reduce((sum, product) => {
      const raw = product.discount
        ? product.price * (1 - product.discount / 100)
        : product.price;

      const rounded = Math.round(raw * 100) / 100;
      return sum + rounded;
    }, 0)
  )

  constructor(private cartService: CartService) {
    this._cart.set(this.cartService.loadCart())
  }

  addToCart = (product: Product): void => {
    const current = this._cart();
    if (!current.find(p => p.id === product.id)) {
      const updated = [...current, product];
      this._cart.set(updated);
      this.cartService.saveCart(updated);
    }
  }

  removeFromCart = (product: Product) => {
    const updated = this._cart().filter(p => p.id !== product.id);
    this._cart.set(updated);
    this.cartService.saveCart(updated);
  }

  clearCart = () => {
    this._cart.set([]);
    this.cartService.clearCart();
  }
}
