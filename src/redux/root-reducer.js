import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './Reducers/user-reducer'
import cartReducer from './Reducers/cart-reducer'
import directoryReducer from './Reducers/directory-reducer'
import shopReducer from './Reducers/shop-reducer'

const rootReducer= combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

const persistConfig= {
    key: 'root',
    storage,
    whitelist:['cart']
}
export default persistReducer(persistConfig, rootReducer)