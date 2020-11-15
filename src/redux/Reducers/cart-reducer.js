import {addItemUtil, removeItemUtil, addQuantityUtil, reduceQuantityUtil, adjustQuantityUtil} from '../../Assets & Utilities/cart-utils'
const INITIAL_STATE= {
    hidden: true,
    cartItems: []
}
const cartReducer= (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'TOGGLE_HIDDEN_CART':
            return{
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems: addItemUtil(state.cartItems, action.payload)
            }
        case 'REMOVE_ITEM':
            return{
                ...state,
                cartItems: removeItemUtil(state.cartItems, action.payload)
            }
        case 'ADD_QUANTITY':
            return{
                ...state,
                cartItems: addQuantityUtil(state.cartItems, action.payload)
            }
        case 'REDUCE_QUANTITY':
            return{
                ...state,
                cartItems: reduceQuantityUtil(state.cartItems, action.payload)
            }
        case 'ADJUST_QUANTITY':
            return{
                ...state,
                cartItems: adjustQuantityUtil(state.cartItems, action.payload, action.quantity)
            }
        case 'CLEAR_CART':
            return{
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}
export default cartReducer;