import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Item } from '../../types/Item';

interface AppContextType {
  addedToCartProducts: Item[],
  setAddedToCartProducts: (arg: Item[]) => void,
  cartProductsAmount: number,
  setCartProductsAmount: (arg: number) => void,
  parsedCartProducts: Item[],
  parsedCartProductsAmount: number,
}

const AppContext = createContext<AppContextType>({
  addedToCartProducts: [],
  setAddedToCartProducts: () => { },
  cartProductsAmount: 0,
  setCartProductsAmount: () => { },
  parsedCartProducts: [],
  parsedCartProductsAmount: 0,
});

type AppContextProviderType = {
  children: React.ReactNode
};

export const AppContextProvider: React.FC<AppContextProviderType>
  = ({ children }) => {
    const [addedToCartProducts, setAddedToCartProducts] = useState<Item[]>([]);
    const [cartProductsAmount, setCartProductsAmount] = useState(0);

    const cartProductsInStorage = localStorage
      .getItem('addedToCartProducts');

    const parsedCartProducts = useMemo(() => {
      return cartProductsInStorage
        ? JSON.parse(cartProductsInStorage)
        : [];
    }, [cartProductsInStorage]);

    const cartProductsAmountInStorage = localStorage
      .getItem('cartProductsAmount');

    const parsedCartProductsAmount = cartProductsAmountInStorage
      ? JSON.parse(cartProductsAmountInStorage)
      : 0;

    const value = useMemo(() => ({
      addedToCartProducts,
      setAddedToCartProducts,
      cartProductsAmount,
      setCartProductsAmount,
      cartProductsInStorage,
      cartProductsAmountInStorage,
      parsedCartProductsAmount,
      parsedCartProducts,
    }), [
      addedToCartProducts,
      cartProductsAmount,
      cartProductsInStorage,
      cartProductsAmountInStorage,
      parsedCartProductsAmount,
      parsedCartProducts,
    ]);

    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };

export const useAppContext = () => useContext(AppContext);
