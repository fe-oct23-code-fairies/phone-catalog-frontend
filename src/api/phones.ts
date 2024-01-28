import { Item } from '../types/Item';
import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

export const getPhones = () => client.getPhones<Product[]>();
export const getPhoneById = (id: string) => client.getPhoneById<Item>(id);
