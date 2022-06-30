import {IProduct} from '@components/Product';
import {useContext} from 'react';
import {CartContext} from './CartContext';

export function useCartContext() {
  const {cartState, dispatchCartState} = useContext(CartContext);
  const {products, productsCount} = cartState;

  function addToCart(product: IProduct) {
    dispatchCartState({type: 'addProduct', payload: product});
  }

  function removeFromCart(product: IProduct) {
    dispatchCartState({type: 'removeProduct', payload: {id: product.id}});
  }

  return {
    cartProducts: products,
    cartProductsCount: productsCount,
    addToCart,
    removeFromCart,
  };
}
