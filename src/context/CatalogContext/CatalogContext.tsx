import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { SetURLSearchParams, useSearchParams } from 'react-router-dom';
import { Product } from '../../types/Product';
import { parseDataFromStorage } from '../../helpers/parseDataFromStorage';

interface CatalogContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (perPage: number) => void;
  totalItems: number;
  setTotalItems: (page: number) => void;
  isLoading: boolean,
  setIsLoading: (arg: boolean) => void,
  error: string | null,
  setError: (arg: string | null) => void,
  handleError: (arg: string) => void,
  prepareProductForPage: (arg: Product[], arg2: string) => Product[],
  parsedItemsPerPage: number,
  parsedSortBy: string,
  selectItemsPerPage: (arg: number | string) => void | undefined,
  selectSortBy: (arg: number | string) => void | undefined,
  sortBy: string,
  setSortBy: (arg: string) => void,
  params: URLSearchParams,
  setParams: SetURLSearchParams,
}

interface CatalogContextProviderProps {
  children: React.ReactNode;
}

export const CatalogContext = createContext<CatalogContextType>({
  currentPage: 1,
  setCurrentPage: () => { },
  itemsPerPage: 16,
  setItemsPerPage: () => { },
  totalItems: 0,
  setTotalItems: () => { },
  isLoading: true,
  setIsLoading: () => { },
  error: null,
  setError: () => { },
  handleError: () => { },
  prepareProductForPage: () => [],
  parsedItemsPerPage: 16,
  parsedSortBy: 'Newest',
  selectItemsPerPage: () => { },
  selectSortBy: () => { },
  sortBy: 'Newest',
  setSortBy: () => { },
  params: new URLSearchParams(),
  setParams: () => { },
});

export const CatalogContextProvider = ({
  children,
}: CatalogContextProviderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('Newest');
  const [params, setParams] = useSearchParams();

  const firstItem = itemsPerPage * currentPage - itemsPerPage + 1;
  const lastItem
    = currentPage * itemsPerPage > totalItems
      ? totalItems
      : currentPage * itemsPerPage;

  const prepareProductForPage = useCallback(
    (
      productsToPrepare: Product[],
      sort: string,
    ) => {
      let productsToSort = productsToPrepare.slice(firstItem - 1, lastItem);

      if (sort) {
        switch (sort) {
          case 'Cheapest':
            productsToSort = productsToSort.sort(
              (product1, product2) => product1.fullPrice - product2.fullPrice,
            );
            break;

          case 'Alphabetically':
            productsToSort = productsToSort.sort(
              (product1, product2) => product1.name
                .localeCompare(product2.name),
            );
            break;

          default:
            productsToSort = productsToSort.sort(
              (product1, product2) => product1.year - product2.year,
            );
        }
      }

      return productsToSort;
    }, [firstItem, lastItem],
  );

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const parsedItemsPerPage
    = parseDataFromStorage<number, number>('itemsPerPage', 16);

  const parsedSortBy
    = parseDataFromStorage<string, string>('sortBy', 'Newest');

  const selectItemsPerPage = useCallback(
    (selectedItem: number | string) => {
      setItemsPerPage(+selectedItem);
      localStorage.setItem(
        'itemsPerPage', JSON.stringify(selectedItem),
      );

      const urlParams = new URLSearchParams(params);

      if (urlParams.get('perPage') === selectedItem.toString()) {
        return;
      }

      urlParams.set('perPage', selectedItem.toString());
      urlParams.set('page', '1');

      setParams(urlParams);
    }, [params, setParams],
  );

  const selectSortBy = useCallback(
    (selectedItem: number | string) => {
      setSortBy(selectedItem.toString());
      localStorage.setItem(
        'sortBy', JSON.stringify(selectedItem),
      );

      const setSortParam = (param: string) => {
        const urlParams = new URLSearchParams(params);

        if (urlParams.get('sort') === param) {
          return;
        }

        urlParams.set('sort', param);
        urlParams.set('page', '1');

        setParams(urlParams);
      };

      switch (selectedItem) {
        case 'Cheapest':
          setSortParam('price');
          break;

        case 'Alphabetically':
          setSortParam('name');
          break;

        case 'Newest':
          setSortParam('year');
          break;

        default:
          setSortParam('');
          break;
      }
    }, [params, setParams],
  );

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
      parsedItemsPerPage,
      selectItemsPerPage,
      sortBy,
      setSortBy,
      selectSortBy,
      parsedSortBy,
      params,
      setParams,
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
      parsedItemsPerPage,
      sortBy,
      parsedSortBy,
      selectItemsPerPage,
      params,
      setParams,
      selectSortBy,
    ],
  );

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export const useCatalogContext = () => useContext(CatalogContext);
