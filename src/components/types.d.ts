export type ProductUnit = 'kilo' | 'unit' | 'bunch';

export interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  unit: ProductUnit;
}