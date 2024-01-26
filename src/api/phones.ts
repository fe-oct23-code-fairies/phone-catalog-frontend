import { Item } from '../types/Item';
import { client } from '../utils/fetchClient';

export const getPhones = () => client.getPhones<Item[]>();
export const getPhoneById = (id: string) => client.getPhoneById<Item>(id);
