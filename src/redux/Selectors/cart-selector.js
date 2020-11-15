import {createSelector} from 'reselect'

const getCart= (state)=> state.cart;

const hiddenStatusSelector= createSelector([getCart], (cart)=> cart.hidden)

const cartItemsSelector = createSelector([getCart], (cart)=> cart.cartItems)

const cartItemsCountSelector = createSelector( [cartItemsSelector], 
    (cartItems)=> cartItems.reduce((accumalator, cartItem)=> ( Number(cartItem.quantity) + accumalator ), 0)
)

const cartsPriceSelector= createSelector(
    [cartItemsSelector],
    (cartItems)=> cartItems.reduce((accumalator, cartItem)=> 
        ( accumalator + Number(cartItem.quantity)*cartItem.price ), 0)
)

export {cartItemsSelector, cartItemsCountSelector, hiddenStatusSelector, cartsPriceSelector};