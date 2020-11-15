import React from 'react';
import CustomButton from './CustomButton';
import {connect} from 'react-redux'
import {addItem} from '../redux/Actions/cart-action'
import './CollectionItem.scss'

const CollectionItem= ({item, addItemToCart})=>(
    <div className="collection-item">
        <div className="image" style={{backgroundImage:`url(${item.imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">{`$${item.price}`}</span>
        </div>
        <CustomButton onClick={()=>addItemToCart(item)} inverted >add to cart</CustomButton>
    </div>
)
const mapDispatchToProps= (dispatch)=>({
    addItemToCart: (item)=> dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)