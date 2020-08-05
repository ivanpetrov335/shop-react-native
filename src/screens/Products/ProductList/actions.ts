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
      Description: 'Republica Socialistă România',
      Id: 1,
      ImageUri: 'https://res.cloudinary.com/teepublic/image/private/s--p5HXtPVR--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_249/c_crop,g_north_west,h_626,w_470,x_-110,y_-44/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-505,y_-369/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1588689884/production/designs/9824274_0.jpg',
      Price: '159',
      Title: 'PHP T-shirt'
    }, {
      Description: 'We have converged the TypeScript and AtScript languages',
      Id: 2,
      ImageUri: 'https://aspblogs.blob.core.windows.net/media/lduveau/Windows-Live-Writer/TypeScript-3-Angular_CF7C/8TxEg_3db9b69d-2a9f-4299-a4a8-d893e21a17eb.jpg',
      Price: '139',
      Title: 'Angular & TypeScript T-shirt'
    }, {
      Description: 'Docker simplifies and accelerates your workflow',
      Id: 3,
      ImageUri: 'https://cdn.shopify.com/s/files/1/0169/2339/4102/products/product-image-1014630201_530x@2x.jpg?v=1571829020',
      Price: '158',
      Title: 'Docker T-shirt'
    }, {
      Description: 'Simple joke',
      Id: 4,
      ImageUri: 'https://s.dou.ua/storage-files/image1_nJNdjuT.png',
      Price: '97',
      Title: 'Joke T-shirt'
    }


  ] as Product[];

  return (dispatch: any) => dispatch(getProductsSuccess(products));
}