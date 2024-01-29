import { Item } from '../types/Item';
import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getTablets = () => client.getTablets<Product[]>();
export const getTabletById = (id: string) => client.getTabletById<Item>(id);
