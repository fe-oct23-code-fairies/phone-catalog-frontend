import { CartProduct } from '../types/CartProduct';
import { FavoriteProduct } from '../types/FavoriteProduct';
import { Product } from '../types/Product';

type Arguments = {
  setProductsOnPageAmount: (arg: number) => void,
  product: Product,
  products: CartProduct[] | FavoriteProduct[],
  productsAmount: number,
  nameInStorage: string,
  amountInStorage: string,
};

export const addProductToPage = ({
  product,
  products,
  setProductsOnPageAmount,
  productsAmount,
  nameInStorage,
  amountInStorage,
}: Arguments) => {
  const isAlreadyInPage = products.find(
    productToFind => productToFind.id === product.id,
  );

  const productIsAddedToFavorites = nameInStorage.includes('Favorite');

  if (isAlreadyInPage) {
    const productTochangeIndex = products.findIndex(
      productToFind => productToFind.id === product.id,
    );

    if (productIsAddedToFavorites) {
      const updatedFavorites = products.filter(
        productToRemove => productToRemove.id !== product.id,
      );

      const updatedFavoritesAmount = productsAmount - 1;
      const productsToSet = JSON.stringify(updatedFavorites);
      const amountToSet = JSON.stringify(updatedFavoritesAmount);

      localStorage.setItem(nameInStorage, productsToSet);
      localStorage.setItem(amountInStorage, amountToSet);

      setProductsOnPageAmount(updatedFavoritesAmount);

      return;
    }

    const newProducts = [...products];

    newProducts[productTochangeIndex] = {
      ...newProducts[productTochangeIndex],
      count: newProducts[productTochangeIndex].count + 1,
    };

    const productsToSet = JSON.stringify(newProducts);

    localStorage.setItem(nameInStorage, productsToSet);

    return;
  }

  const updatedItems = [...products, { ...product, count: 1 }];
  const updatedProductsAmount = productsAmount + 1;

  localStorage
    .setItem(nameInStorage, JSON.stringify(updatedItems));
  localStorage
    .setItem(amountInStorage, JSON.stringify(updatedProductsAmount));
  setProductsOnPageAmount(updatedProductsAmount);
};
