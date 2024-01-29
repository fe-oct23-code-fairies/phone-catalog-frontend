import { Item } from '../types/Item';
import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getAccessories = () => client.getAccessories<Product[]>();
export const getAccessorieById = (id: string) => {
  return client.getAccessoryById<Item>(id);
};
