import {ProductStore} from './product.store';
import {Product} from '@models/product.model';

describe('ProductStore', () => {
  let store: ProductStore;

  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Wiedźmin 3',
      price: 49.99,
      isFeatured: true,
      imgUrl: 'https://example.com/w3.jpg'
    },
    {
      id: '2',
      name: 'Hades',
      price: 19.99,
      discount: 10,
      isFeatured: false,
      imgUrl: 'https://example.com/hades.jpg'
    }
  ];

  beforeEach(() => {
    store = new ProductStore();
  });

  it('should initialize with empty product list', () => {
    expect(store.products()).toEqual([]);
  });

  it('should set products correctly', () => {
    store.setProducts(mockProducts);
    expect(store.products()).toEqual(mockProducts);
  });

});
