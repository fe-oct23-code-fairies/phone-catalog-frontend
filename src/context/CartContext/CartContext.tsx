import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

interface CartContextType {
  isCheckoutSuccessful: boolean,
  setIsCheckoutSuccessful: (arg: boolean) => void,
}

const CartContext = createContext<CartContextType>({
  isCheckoutSuccessful: false,
  setIsCheckoutSuccessful: () => { },
});

type CartContextProviderType = {
  children: React.ReactNode
};

export const CartContextProvider: React.FC<CartContextProviderType>
  = ({ children }) => {
    const [isCheckoutSuccessful, setIsCheckoutSuccessful] = useState(false);

    const value = useMemo(() => ({
      isCheckoutSuccessful,
      setIsCheckoutSuccessful,
    }), [isCheckoutSuccessful]);

    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };

export const useCartContext = () => useContext(CartContext);
