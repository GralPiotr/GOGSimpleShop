import {Component, signal} from '@angular/core';
import {Product} from '@models/product.model';
import {ProductList} from '../common/product-list/product-list';
import {GameOfTheWeekBanner} from '../common/game-of-the-week-banner/game-of-the-week-banner';
import {ProductStore} from '@stores/product.store';
import {CartStore} from '@stores/cart.store';
import {ProductService} from '@services/product.service';

@Component({
  selector: 'app-home',
  imports: [
    ProductList,
    GameOfTheWeekBanner
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  addToCart!: (product: Product) => void;

  constructor(
    public _productStore: ProductStore,
    public _cartStore: CartStore,
    public _productService: ProductService,
  ) {
    this.addToCart = this._cartStore.addToCart;
    this._productService.getProducts().subscribe(products => {
      this._productStore.setProducts(products)
    })
  }

  get products() {
    return this._productStore.products();
  }

  get cart() {
    return this._cartStore.cart();
  }

}
