import { Item } from '../types/Item';
import { client } from '../utils/fetchClient';

export const getTablets = () => client.getTablets<Item[]>();
export const getTabletById = (id: string) => client.getTabletById<Item>(id);
