import React from 'react';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {cartItemsSelector, cartsPriceSelector} from '../redux/Selectors/cart-selector'

import CheckOutItem from '../Components/CheckOutItem';
import './CheckOutPage.scss'

const CheckOutPage = ({carItems, totalPrice})=> (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>description</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block last">
                <span>remove</span>
            </div>
        </div>
        {
            carItems.map( (cartItem)=> <CheckOutItem key={cartItem.id} cartItem={cartItem}/> )
        }
        <div className="total">
            <span>TOTAL: ${totalPrice}</span>
        </div>
    </div>
)

const mapStateToProps= createStructuredSelector({
    carItems: cartItemsSelector,
    totalPrice: cartsPriceSelector
})
export default connect(mapStateToProps)(CheckOutPage);