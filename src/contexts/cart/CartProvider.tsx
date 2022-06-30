import React, {useReducer} from 'react';
import {IProduct} from '@components/Product';
import {CartContext} from './CartContext';
import {cartReducer} from './CartReducer';

interface ICartContextProvider {
  children: JSX.Element | JSX.Element[];
}

export interface CartContextState {
  products: IProduct[];
  productsCount: number;
}

const INITIAL_STATE: CartContextState = {
  products: [],
  productsCount: 0,
};

export function CartContextProvider({children}: ICartContextProvider) {
  const [cartState, dispatchCartState] = useReducer(cartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider value={{cartState, dispatchCartState}}>
      {children}
    </CartContext.Provider>
  );
}
