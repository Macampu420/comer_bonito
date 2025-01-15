export enum ProductUnit {
  KILOGRAM = 'kg',
  UNIT = 'unit',
  BUNCH = 'bunch',
}

export interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  unit: ProductUnit;
}