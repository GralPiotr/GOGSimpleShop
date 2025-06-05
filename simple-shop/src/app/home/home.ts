import {Component, signal} from '@angular/core';
import {Product} from '@models/product.model';
import {ProductList} from '../common/product-list/product-list';
import {GameOfTheWeekBanner} from '../common/game-of-the-week-banner/game-of-the-week-banner';

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
  products = signal<Product[]>([{
    id: '1',
    name: 'Cyberstrike 2077 adas das dss',
    price: 59.99,
    discount: 50,
    imgUrl: 'https://img.freepik.com/premium-photo/stealth-video-game-scene-futuristic-infiltration_23-2150894582.jpg?w=1060',
    isFeatured: true
  },
    {
      id: '2',
      name: 'Dragon Siege',
      price: 49.99,
      imgUrl: 'https://img.freepik.com/premium-photo/stealth-video-game-scene-futuristic-infiltration_23-2150894582.jpg?w=1060'
    },
    {
      id: '5',
      name: 'Mech Arena',
      price: 64.99,
      discount: 40,
      imgUrl: 'https://img.freepik.com/free-photo/robot-wars-scene-futuristic-city_23-2150849753.jpg?w=1060'
    },
    {
      id: '6',
      name: 'Rogue Horizon',
      price: 54.99,
      imgUrl: 'https://img.freepik.com/premium-photo/spaceship-flying-above-alien-planet_23-2150889311.jpg?w=1060'
    },
    {
      id: '7',
      name: 'Last Outpost',
      price: 29.99,
      imgUrl: 'https://img.freepik.com/premium-photo/post-apocalyptic-military-base-game-environment_23-2150889306.jpg?w=1060'
    },
  ]);

  cart = signal<Product[]>([{
    id: '2',
    name: 'Dragon Siege',
    price: 49.99,
    imgUrl: 'https://img.freepik.com/premium-photo/stealth-video-game-scene-futuristic-infiltration_23-2150894582.jpg?w=1060'
  },
    {
      id: '5',
      name: 'Mech Arena',
      price: 64.99,
      discount: 40,
      imgUrl: 'https://img.freepik.com/free-photo/robot-wars-scene-futuristic-city_23-2150849753.jpg?w=1060'
    },]);
  addToCart = (product: Product) => {
    this.cart.update(cart => [...cart, product]);
  }

}
