export const addItemUtil= (cartItems, itemToAdd) =>{
    const existingCartItem= cartItems.find( (cartItem)=> cartItem.id === itemToAdd.id )

    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity+1}
            : 
            cartItem    
        )
    }
    return [ ...cartItems, {...itemToAdd, quantity: 1} ]
}
export const removeItemUtil = (cartItems, itemToRemove)=>( cartItems.filter(cartItem=> cartItem.id!==itemToRemove) )

export const reduceQuantityUtil= (cartItems, itemId)=>{
    const targetItem = cartItems.find((cartItem)=> cartItem.id===itemId)
    if (targetItem.quantity===1){
        return [
            ...cartItems
        ]
    }else{
        return cartItems.map(cartItem =>
            cartItem.id === itemId ?
            {...cartItem, quantity: cartItem.quantity-1}
            : 
            cartItem    
        )
    }
}

export const addQuantityUtil= (cartItems, itemId)=>{
    return cartItems.map(cartItem =>
        cartItem.id === itemId ?
        {...cartItem, quantity: cartItem.quantity+1}
        : 
        cartItem    
    )
}

export const adjustQuantityUtil= (cartItems, itemId, inputQuantity)=>{
    return cartItems.map( cartItem=>
        cartItem.id === itemId?
        {...cartItem, quantity: Number(inputQuantity)}
        :
        cartItem
    )
}