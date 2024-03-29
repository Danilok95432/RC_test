import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import overlayReducer from "./overlayReducer";
import cartReducer from "./cartReducer";
import searchReducer from './searchReducer';
 
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products', 'categories', 'search', 'overlay'],
}

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    search: searchReducer,
    overlay: overlayReducer
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store