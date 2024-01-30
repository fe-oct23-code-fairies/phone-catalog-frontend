import { Item } from '../types/Item';
import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getProducts = () => client.getProducts<Product[]>();
export const getProductById = (id: string) => {
  return client.getProductById<Item>(id);
};
