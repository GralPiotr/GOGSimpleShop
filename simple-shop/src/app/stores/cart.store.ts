import {computed, Injectable, signal} from '@angular/core';
import {Product} from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {

  private readonly _cart = signal<Product[]>([]);
  readonly cart = computed(() => this._cart());

  readonly cartTotal = computed(() =>
    this._cart().reduce((sum, product) =>
      sum + (product.price * (product.discount ? 1 - product.discount / 100 : 1)), 0)
  )
  readonly cartSize = computed(() => this._cart().length);

  addToCart = (product: Product): void => {
    const current = this._cart();
    if (!current.find(p => p.id === product.id)) {
      this._cart.set([...current, product]);
    }
  }

  removeFromCart(product: Product) {
    this._cart.set(this._cart().filter(p => p.id === product.id));
  }

  clearCart = () => {
    this._cart.set([]);
  }
}
