import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getPhones = () => client.getPhones<Product[]>();
export const getPhonesByQuery = (
  page: string,
  limit: string,
  sortBy: string,
) => client.getPhonesByQuery<Product[]>(page, limit, sortBy);
