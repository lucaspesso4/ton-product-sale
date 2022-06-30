import {createContext} from 'react';
import {ICartContext} from './types';

export const CartContext = createContext<ICartContext>({} as ICartContext);
