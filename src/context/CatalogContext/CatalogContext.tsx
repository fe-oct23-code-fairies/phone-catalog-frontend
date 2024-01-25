import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import { ItemsPerPage } from '../../types/ItemsPerPage';
import { Product } from '../../types/Product';

interface CatalogContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (perPage: ItemsPerPage) => void;
  totalItems: number;
  setTotalItems: (page: number) => void;
  products: Product[];
  setProducts: (arg: Product[]) => void;
  visibleProducts: Product[];
}

interface CatalogContextProviderProps {
  children: React.ReactNode;
}

export const CatalogContext = createContext<CatalogContextType>({
  currentPage: 1,
  setCurrentPage: () => {},
  itemsPerPage: ItemsPerPage.eight,
  setItemsPerPage: () => {},
  totalItems: 0,
  setTotalItems: () => {},
  products: [],
  setProducts: () => {},
  visibleProducts: [],
});

export const CatalogContextProvider = ({
  children,
}: CatalogContextProviderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ItemsPerPage.eight);
  const [totalItems, setTotalItems] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  const firstItem = itemsPerPage * currentPage - itemsPerPage + 1;
  const lastItem
    = currentPage * itemsPerPage > totalItems
      ? totalItems
      : currentPage * itemsPerPage;
  const visibleProducts = products.slice(firstItem - 1, lastItem);

  const value: CatalogContextType = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      itemsPerPage,
      setItemsPerPage,
      totalItems,
      setTotalItems,
      products,
      setProducts,
      visibleProducts,
    }),
    [
      currentPage,
      setCurrentPage,
      itemsPerPage,
      totalItems,
      setItemsPerPage,
      setTotalItems,
      visibleProducts,
      products,
    ],
  );

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export const useCatalogContext = () => useContext(CatalogContext);
