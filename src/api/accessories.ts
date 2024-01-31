import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getAccessories = () => client.getAccessories<Product[]>();
export const getAccessoriesByQuery = (
  page: string,
  limit: string,
  sortBy: string,
) => client.getAccessoriesByQuery<Product[]>(page, limit, sortBy);
