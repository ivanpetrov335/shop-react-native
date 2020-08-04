import { Product } from "../reducer"
import { useDispatch } from 'react-redux'

export const GET_PRODUCTS = 'GET_PRODUCTS'

export interface GetProductsAction {
  type: typeof GET_PRODUCTS
  products: Product[]
}

export const getProductsSuccess = (products: Product[]): GetProductsAction => {
  return {
    type: GET_PRODUCTS,
    products
  };
}

export const getProducts = () => {

  var products = [
    {
      Description: 'Product 1',
      Id: 1,
      ImageUri: 'https://image.shutterstock.com/z/stock-vector-static-electricity-is-an-imbalance-of-electric-charges-within-or-on-the-surface-of-a-material-1473383789.jpg',
      Price: '11',
      Title: 'Product 1'
    }, {
      Description: 'Product 2',
      Id: 2,
      ImageUri: 'https://image.shutterstock.com/z/stock-vector-static-electricity-is-an-imbalance-of-electric-charges-within-or-on-the-surface-of-a-material-1473383789.jpg',
      Price: '22',
      Title: 'Product 2'
    }

  ] as Product[];

  return (dispatch: any) => dispatch(getProductsSuccess(products));
}