import {combineReducers, legacy_createStore as createStore} from "redux"; 
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";


let reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
})

let store = createStore(reducers)

export default store