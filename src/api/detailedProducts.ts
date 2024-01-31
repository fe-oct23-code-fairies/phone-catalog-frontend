import { Item } from '../types/Item';
import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getDetailed = () => client.getDetailed<Item[]>();

export const getDetailedById = (id: string) => {
  return client.getDetailedById<Item>(id);
};

export const getDetailedRecommended = (id?: string) => {
  return client.getDetailedRecommendations<Product[]>(id || '');
};
