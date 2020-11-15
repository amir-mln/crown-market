import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../redux/Actions/cart-action'
import {cartItemsSelector} from '../redux/Selectors/cart-selector'
import CustomButton from './CustomButton'
import CartItem from './CartItem'
import './CartDropDown.scss'

const CartDropDown= ({toggleHidden, cartItems, history})=> (
    <div className="cart-dropdown" onMouseLeave={toggleHidden}>
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map((cartItem)=> <CartItem key={cartItem.id} item={cartItem} />)
                :
                <span className="empty-message">Your Cart Is Empty</span>
            }
        </div> 
        <CustomButton onClick={()=> history.push('/check-out')}disabled={!cartItems.length}>GO TO CHECK OUT</CustomButton>
    </div>
)

const mapDispatchToProps= (dispatch)=> ({
    toggleHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps= (state)=>( { cartItems: cartItemsSelector(state) } )

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));