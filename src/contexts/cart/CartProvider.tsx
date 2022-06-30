import React, {useReducer} from 'react';
import {CartContext} from './CartContext';
import {cartReducer} from './CartReducer';
import {CartContextState, ICartContextProvider} from './types';

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
