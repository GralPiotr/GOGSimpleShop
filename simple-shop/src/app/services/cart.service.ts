import { Injectable } from '@angular/core';
import {Product} from '@models/product.model';

const CART_KEY = 'app_cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  loadCart(): Product[] {
    try {
      const data = sessionStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveCart(products: Product[]): void {
    try {
      sessionStorage.setItem(CART_KEY, JSON.stringify(products));
    } catch (error) {
      console.error(error);
    }
  }

  clearCart(): void {
    sessionStorage.removeItem(CART_KEY);
  }
}
