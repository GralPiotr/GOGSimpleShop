import {Component, Input, signal} from '@angular/core';
import {Product} from '@models/product.model';
import {ProductCard} from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  @Input({required: true}) products!: Product[];
  @Input({required: true}) cart!:Product[];
  @Input({required: true}) action!: (product: Product) => void

  private visibleCount = signal(5);


  getStatus(product: Product): 'inCart' | 'available' {
    return this.cart.some(p => p.id === product.id) ? 'inCart' : 'available';
  }
  get visibleProducts(): Product[] {
    return this.products.slice(0, this.visibleCount());
  }

  showMore(): void {
    this.visibleCount.update(count => count + 5);
  }

  get hasMore(): boolean {
    return this.products.length > this.visibleCount();
  }
}
