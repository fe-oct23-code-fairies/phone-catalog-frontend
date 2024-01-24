import { Product } from '../types/Product';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function get<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    });
}

export const client = {
  getProducts: () => get<Product[]>('products'),
  getProductById: (id: string) => get<Product>(`products/${id}`),

  getAccessories: () => get<Product[]>('accessories'),
  getAccessoryById: (id: string) => get<Product>(`accessories/${id}`),

  getPhones: () => get<Product[]>('phones'),
  getPhoneById: (id: string) => get<Product>(`phones/${id}`),

  getTablets: () => get<Product[]>('tablets'),
  getTabletById: (id: string) => get<Product>(`tablets/${id}`),
};
