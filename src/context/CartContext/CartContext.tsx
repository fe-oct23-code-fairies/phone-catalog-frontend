import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

interface CartContextType {
  isCheckoutSuccessful: boolean,
  setIsCheckoutSuccessful: (arg: boolean) => void,
  totalPrice: number,
  setTotalPrice: (arg:number) => void,
}

const CartContext = createContext<CartContextType>({
  isCheckoutSuccessful: false,
  setIsCheckoutSuccessful: () => { },
  totalPrice: 0,
  setTotalPrice: () => {},
});

type CartContextProviderType = {
  children: React.ReactNode
};

export const CartContextProvider: React.FC<CartContextProviderType>
  = ({ children }) => {
    const [isCheckoutSuccessful, setIsCheckoutSuccessful] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const value = useMemo(() => ({
      isCheckoutSuccessful,
      setIsCheckoutSuccessful,
      totalPrice,
      setTotalPrice,
    }), [isCheckoutSuccessful, totalPrice]);

    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };

export const useCartContext = () => useContext(CartContext);
