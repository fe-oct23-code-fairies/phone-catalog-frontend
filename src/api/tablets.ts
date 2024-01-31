import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getTablets = () => client.getTablets<Product[]>();
export const getTabletsByQuery = (
  page: string,
  limit: string,
  sortBy: string,
) => client.getTabletsByQuery<Product[]>(page, limit, sortBy);
