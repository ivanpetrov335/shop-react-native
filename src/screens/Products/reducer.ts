import { GetProductsAction, GET_PRODUCTS } from "./ProductList/actions"

export type Product = {
    Id: number;
    Title: string;
    Price: string;
    Description: string;
    ImageUri: string;
}

interface ActionType
    extends GetProductsAction {
    statusText: string;
}

export type ProductState = {
    products?: Product[];
}

const initialState: ProductState = {
    products: undefined
}

export const reducer = (state: ProductState = initialState, action: ActionType) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.products };
        default:
            return state;
    }
}