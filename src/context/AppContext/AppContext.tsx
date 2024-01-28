import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { CartProduct } from '../../types/CartProduct';
import { parseDataFromStorage } from '../../helpers/parseDataFromStorage';
import { Product } from '../../types/Product';
import { addProductToPage } from '../../helpers/addProductToPage';
import { FavoriteProduct } from '../../types/FavoriteProduct';

interface AppContextType {
  addedToCartProducts: CartProduct[],
  setAddedToCartProducts: (arg: CartProduct[]) => void,
  cartProductsAmount: number,
  setCartProductsAmount: (arg: number) => void,
  parsedCartProducts: CartProduct[],
  parsedCartProductsAmount: number,
  addProductToCart: (productToAdd: Product) => void,
  addedToFavoriteProducts: FavoriteProduct[],
  setAddedToFavoriteProducts: (arg: FavoriteProduct[]) => void,
  favoriteProductsAmount: number,
  setFavoriteProductsAmount: (arg: number) => void,
  parsedFavoriteProducts: FavoriteProduct[],
  parsedFavoriteProductsAmount: number,
  addProductToFavorites: (productToAdd: Product) => void,
  parsedFavorites: number[],
  areFavorites: number[],
  setAreFavorites: (ids: number[]) => void,
}

const AppContext = createContext<AppContextType>({
  addedToCartProducts: [],
  setAddedToCartProducts: () => { },
  cartProductsAmount: 0,
  setCartProductsAmount: () => { },
  parsedCartProducts: [],
  parsedCartProductsAmount: 0,
  addProductToCart: () => { },
  addedToFavoriteProducts: [],
  setAddedToFavoriteProducts: () => { },
  favoriteProductsAmount: 0,
  setFavoriteProductsAmount: () => { },
  parsedFavoriteProducts: [],
  parsedFavoriteProductsAmount: 0,
  addProductToFavorites: () => { },
  parsedFavorites: [],
  areFavorites: [],
  setAreFavorites: () => { },
});

type AppContextProviderType = {
  children: React.ReactNode
};

export const AppContextProvider: React.FC<AppContextProviderType>
  = ({ children }) => {
    const [addedToCartProducts, setAddedToCartProducts]
      = useState<CartProduct[]>([]);
    const [cartProductsAmount, setCartProductsAmount] = useState(0);
    const [addedToFavoriteProducts, setAddedToFavoriteProducts]
      = useState<FavoriteProduct[]>([]);
    const [favoriteProductsAmount, setFavoriteProductsAmount] = useState(0);
    const [areFavorites, setAreFavorites] = useState<number[]>([]);

    const parsedCartProducts
      = parseDataFromStorage<CartProduct[], object>('addedToCartProducts', []);

    const parsedCartProductsAmount
      = parseDataFromStorage<number, number>('cartProductsAmount', 0);

    const parsedFavoriteProducts
      = parseDataFromStorage<FavoriteProduct[], object>(
        'addedToFavoriteProducts', [],
      );

    const parsedFavoriteProductsAmount
      = parseDataFromStorage<number, number>('favoriteProductsAmount', 0);

    const parsedFavorites
      = parseDataFromStorage<number[], []>('favorites', []);

    const addProductToCart = useCallback(
      (productToAdd: Product) => {
        addProductToPage({
          product: productToAdd,
          products: parsedCartProducts,
          setProductsOnPageAmount: setCartProductsAmount,
          productsAmount: cartProductsAmount,
          nameInStorage: 'addedToCartProducts',
          amountInStorage: 'cartProductsAmount',
        });
      }, [cartProductsAmount, parsedCartProducts],
    );

    const addProductToFavorites = useCallback(
      (productToAdd: Product) => {
        addProductToPage({
          product: productToAdd,
          products: parsedFavoriteProducts,
          setProductsOnPageAmount: setFavoriteProductsAmount,
          productsAmount: favoriteProductsAmount,
          nameInStorage: 'addedToFavoriteProducts',
          amountInStorage: 'favoriteProductsAmount',
        });
      }, [favoriteProductsAmount, parsedFavoriteProducts],
    );

    const value = useMemo(() => ({
      addedToCartProducts,
      setAddedToCartProducts,
      cartProductsAmount,
      setCartProductsAmount,
      parsedCartProductsAmount,
      parsedCartProducts,
      addProductToCart,
      addedToFavoriteProducts,
      setAddedToFavoriteProducts,
      favoriteProductsAmount,
      setFavoriteProductsAmount,
      parsedFavoriteProducts,
      parsedFavoriteProductsAmount,
      addProductToFavorites,
      parsedFavorites,
      areFavorites,
      setAreFavorites,
    }), [
      addedToCartProducts,
      cartProductsAmount,
      parsedCartProductsAmount,
      parsedCartProducts,
      addProductToCart,
      addedToFavoriteProducts,
      favoriteProductsAmount,
      parsedFavoriteProducts,
      parsedFavoriteProductsAmount,
      addProductToFavorites,
      parsedFavorites,
      areFavorites,
    ]);

    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };

export const useAppContext = () => useContext(AppContext);
