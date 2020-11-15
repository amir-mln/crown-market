import React from 'react';
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {cartItemsSelector, cartsPriceSelector} from '../redux/Selectors/cart-selector'

import CustomButton from '../Components/CustomButton'
import CheckOutItem from '../Components/CheckOutItem';
import StepProgress from '../Components/StepProgress';
import './CartItemsPage.scss'

const CartItemsPage = ({carItems, totalPrice, history})=> (
    <div className="cart-items-page">
        <div className="cart-items-table">
            <div className="cart-items-header">
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
            <div className="cart-footer">
                <span className="total">TOTAL: ${totalPrice}</span>
                <CustomButton onClick={()=>history.push('/check-out-shipment')}>Proceed To Address Form</CustomButton>
            </div>
        </div>
        <StepProgress/>
    </div>
)

const mapStateToProps= createStructuredSelector({
    carItems: cartItemsSelector,
    totalPrice: cartsPriceSelector
})
export default withRouter( connect(mapStateToProps)(CartItemsPage) );