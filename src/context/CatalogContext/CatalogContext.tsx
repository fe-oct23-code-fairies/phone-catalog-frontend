import React, {
  createContext, useCallback, useContext, useMemo, useState,
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
  isLoading: boolean,
  setIsLoading: (arg: boolean) => void,
  error: string | null,
  setError: (arg: string | null) => void,
  handleError: (arg: string) => void,
  prepareProductForPage: (arg: Product[]) => Product[]
}

interface CatalogContextProviderProps {
  children: React.ReactNode;
}

export const CatalogContext = createContext<CatalogContextType>({
  currentPage: 1,
  setCurrentPage: () => { },
  itemsPerPage: ItemsPerPage.eight,
  setItemsPerPage: () => { },
  totalItems: 0,
  setTotalItems: () => { },
  isLoading: true,
  setIsLoading: () => { },
  error: null,
  setError: () => {},
  handleError: () => {},
  prepareProductForPage: () => [],
});

export const CatalogContextProvider = ({
  children,
}: CatalogContextProviderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ItemsPerPage.sixteen);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const firstItem = itemsPerPage * currentPage - itemsPerPage + 1;
  const lastItem
    = currentPage * itemsPerPage > totalItems
      ? totalItems
      : currentPage * itemsPerPage;

  const prepareProductForPage = useCallback(
    (productsToPrepare: Product[]) => {
      const preparedProducts = productsToPrepare.slice(firstItem - 1, lastItem);

      return preparedProducts;
    }, [firstItem, lastItem],
  );

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const value: CatalogContextType = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      itemsPerPage,
      setItemsPerPage,
      totalItems,
      setTotalItems,
      isLoading,
      setIsLoading,
      error,
      setError,
      handleError,
      prepareProductForPage,
    }),
    [
      currentPage,
      setCurrentPage,
      itemsPerPage,
      totalItems,
      setItemsPerPage,
      setTotalItems,
      isLoading,
      setIsLoading,
      error,
      setError,
      prepareProductForPage,
    ],
  );

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export const useCatalogContext = () => useContext(CatalogContext);
