import React from 'react'
import {connect} from 'react-redux'
import {removeItem, reduceQuantity, addQuantity, adjustQuantity} from '../redux/Actions/cart-action'
import './CheckOutItem.scss'

const CheckOutItem = ({cartItem: {id, name, imageUrl, quantity, price}, dispatch})=>(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span 
                onClick={()=> dispatch(reduceQuantity(id))} 
                className={`${quantity===1? 'disabled':''} arrow`} 
            >
                &#10094;
            </span>
            <input 
                type="number" 
                value={quantity} 
                onChange={ (e)=> {
                    // const regEx= /^(?:0?[1-9]|1[0-9]|20)$/;
                    let value = Number(e.target.value);
                    const inRange = (value >= 1) && (value <= 20);
                    if ( inRange || !e.target.value) {
                        dispatch(adjustQuantity(id, e.target.value ) );
                    }
                }}
                className='value'
                required
            />
            <span 
                onClick={()=> dispatch(addQuantity(id))} 
                className='arrow'
            >
                &#10095;
            </span>
        </span>
        <span className="price">{price}</span>
        <div onClick={()=> dispatch(removeItem(id))} className="remove-button">&#10005;</div>
    </div>
)
export default connect()(CheckOutItem);