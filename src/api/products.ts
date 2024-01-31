import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getProducts = () => client.getProducts<Product[]>();

export const getProductById = (id: string) => {
  return client.getProductById<Product>(id);
};

export const getNewProducts = () => client.getNew<Product[]>();

export const getHotProducts = () => client.getHot<Product[]>();
