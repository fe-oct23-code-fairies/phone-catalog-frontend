import { Description } from './Description';

export interface Item {
  id: string,
  namespaceId: string,
  name: string,
  capacityAvailable: string[],
  capacity: string,
  priceRegular: number,
  priceDiscount: number,
  coloursAvailable: string[],
  colour: string,
  images: string[],
  description: Description[],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera?: string,
  zoom?: string,
  cell: string[]
}
