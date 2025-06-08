import {Component, Signal, signal} from '@angular/core';
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
  isLoading = signal(false)

  constructor(
    public _productStore: ProductStore,
    public _cartStore: CartStore,
    public _productService: ProductService,
  ) {
    this.addToCart = this._cartStore.addToCart;
    this.isLoading.set(true);
    this._productService.getProducts().subscribe(products => {
      this._productStore.setProducts(products)
      this.isLoading.set(false);
    })
  }

  get products() {
    return this._productStore.products();
  }

  get cart() {
    return this._cartStore.cart();
  }

  featuredProduct() {
    let product= this.products.find(product => {
      return product.isFeatured === true
    })
    if (!product) {
      return this.products[0];
    }
    return product;
  }
}
