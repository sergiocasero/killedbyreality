export enum ProductType {
  APP = 'app',
  SERVICE = 'service',
  HARDWARE = 'hardware',
}

export interface Product {
  name: string;
  url: string;
  location: string;
  promoter: string;
  release_date: string;
  status: string;
  technology: string;
  budget: string;
}

export type ProductWithSlug = Product & { slug: string };
