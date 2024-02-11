import {combineReducers, legacy_createStore as createStore} from "redux"; 
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import overlayReducer from "./overlayReducer";
import cartReducer from "./cartReducer";


let reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    overlay: overlayReducer
})

let store = createStore(reducers)

export default store