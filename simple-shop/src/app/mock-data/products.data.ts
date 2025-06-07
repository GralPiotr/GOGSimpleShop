import { Product } from '@models/product.model';
export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cyberpunk 2077',
    price: 59.99,
    discount: 40,
    imgUrl: 'https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6kz2.png',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Red Dead Redemption 2',
    price: 69.99,
    discount: 50,
    imgUrl: 'https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc9v7g.png',
  },
  {
    id: '3',
    name: 'The Witcher 3: Wild Hunt',
    price: 49.99,
    imgUrl: 'https://images.igdb.com/igdb/image/upload/t_screenshot_big/scoh3r.png',
  },
  {
    id: '4',
    name: 'Hades',
    price: 24.99,
    discount: 35,
    imgUrl: 'https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6vfu.png',
  },
  {
    id: '5',
    name: 'Stardew Valley',
    price: 9.99,
    imgUrl: 'https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6kpe.png',
  }
];
