export const toggleCartHidden= ()=> ({
    type: 'TOGGLE_HIDDEN_CART'
})

export const addItem = (item)=>({
    type: 'ADD_ITEM',
    payload: item
})

export const removeItem= (itemId)=>({
    type: 'REMOVE_ITEM',
    payload: itemId
})

export const reduceQuantity= (itemId)=> ({
    type: 'REDUCE_QUANTITY',
    payload: itemId
})

export const addQuantity= (itemId)=> ({
    type: 'ADD_QUANTITY',
    payload: itemId
})

export const adjustQuantity= (itemId, quantity)=> ({
    type: 'ADJUST_QUANTITY',
    payload: itemId,
    quantity
})

export const clearCartOut= ()=>({
    type: 'CLEAR_CART'
})