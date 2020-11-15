import React from 'react';
import {ReactComponent as ShopingIcon} from '../Assets & Utilities/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../redux/Actions/cart-action'
import {cartItemsCountSelector} from '../redux/Selectors/cart-selector'

import './CartIcon.scss'

const CartIcon= ({toggleHidden, itemCount})=> (
    <div className="cart-icon" onClick={toggleHidden} onMouseEnter={toggleHidden}>
        <ShopingIcon className="shoping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps= (state) => ({
    itemCount: cartItemsCountSelector(state)
})
const mapDispatchToProps= (dispatch)=> ({
    toggleHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);