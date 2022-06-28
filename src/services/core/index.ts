import axios from 'axios';

const PRODUCTS_BASE_URL = 'https://gist.githubusercontent.com/lucaspesso4/';

const SERVICES = {
  get: {
    products:
      '1dc517ad02c5dbcc05ab27b0fdb4c662/raw/c40e4b4d1886c3237aff8a119ed21bca755df342/products.json',
  },
};

function getAuthorizationHeader() {
  const token = '';

  return {
    Authorization: `Bearer ${token}`,
  };
}

function customAxiosGet(url: string) {
  // Caso mude a API e precise de algum token de autorização, está centralizado
  const config = {headers: getAuthorizationHeader()};
  console.log('`${PRODUCTS_BASE_URL}${url}`', `${PRODUCTS_BASE_URL}${url}`);

  return axios.get(`${PRODUCTS_BASE_URL}${url}`);
}

export class ProductsService {
  static getProducts() {
    return customAxiosGet(`${SERVICES.get.products}`);
  }
}
