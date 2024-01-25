import { Item } from '../types/Item';
import { client } from '../utils/fetchClient';

export const getAccessories = () => client.getAccessories<Item[]>();
export const getAccessorieById = (id: string) => {
  return client.getAccessoryById<Item>(id);
};
