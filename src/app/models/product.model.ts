export interface Product {
  id: string;
  name: string;
  price: number;
  discount?: number;
  isOwned?: boolean;
  imgUrl?: string;
  isFeatured?: boolean;
}
