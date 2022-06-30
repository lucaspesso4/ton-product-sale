import {CartAction, CartContextState} from './types';

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
    case 'clearCart':
      return {
        ...state,
        productsCount: 0,
        products: [],
      };
    default:
      return state;
  }
}
