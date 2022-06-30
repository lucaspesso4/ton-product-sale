import {createContext} from 'react';
import {CartContextState} from './CartProvider';
import {CartAction} from './CartReducer';

export interface ICartContext {
  cartState: CartContextState;
  dispatchCartState: React.Dispatch<CartAction>;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);
