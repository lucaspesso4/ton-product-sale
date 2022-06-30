import {useQuery} from 'react-query';
import {ProductsService} from './core';

export default function useFetchProducts() {
  return useQuery('products', () => ProductsService.getProducts());
}
