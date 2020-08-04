import { reducer as productReducer, ProductState } from "./Products/reducer";
import { combineReducers } from "redux";

export interface AppState {
    products: ProductState;
}

const rootReducer = combineReducers<AppState>({
    products: productReducer
});

export default rootReducer;