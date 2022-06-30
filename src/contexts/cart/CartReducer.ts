import {IProduct} from '@components/Product';
import {CartContextState} from './CartProvider';

export type CartAction =
  | {type: 'addProduct'; payload: IProduct}
  | {type: 'removeProduct'; payload: {id: number}};

export function cartReducer(
  state: CartContextState,
  action: CartAction,
): CartContextState {
  switch (action.type) {
    case 'addProduct':
      return {
        ...state,
        productsCount: state.productsCount + 1,
        products: [...state.products, action.payload],
      };
    case 'removeProduct':
      return {
        ...state,
        productsCount: state.productsCount - 1,
        products: state.products.filter(
          product => product.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}
