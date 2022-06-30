import {IProduct} from 'types/Product';

export interface ICartContextProvider {
  children: JSX.Element | JSX.Element[];
}

export interface CartContextState {
  products: IProduct[];
  productsCount: number;
}

export type CartAction =
  | {type: 'addProduct'; payload: IProduct}
  | {type: 'removeProduct'; payload: {id: number}};

export interface ICartContext {
  cartState: CartContextState;
  dispatchCartState: React.Dispatch<CartAction>;
}
