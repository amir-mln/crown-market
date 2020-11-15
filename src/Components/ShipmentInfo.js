import React from 'react';
import {connect} from 'react-redux';

import {cartItemsSelector, cartItemsCountSelector, cartsPriceSelector} from '../redux/Selectors/cart-selector'
import './ShipmentInfo.scss'

class ShipmentInfo extends React.Component{
    constructor(){
        super();
        this.state= {
            shipment_type: 'Normal',
            shipment_fee: 10,
            shipment_time: '72 Hours'
        }
    }
    handleChange=(e)=>{
        const {value}= e.target;
        if(value==='Fast') { this.setState( { shipment_fee: 20, shipment_time: '48 Hours'} ) }
        else { this.setState({shipment_fee: 10, shipment_time: '72 Hours'}) }
    }
    
    render(){
    const {totalItems, totalQt, totalPrice}= this.props;
    return <div className="info-box">
        <div className="flex-el"> <span>Total Items</span> <span> {totalItems.length} </span> </div>
        <div className="flex-el"> <span>Total Qt</span> <span> {totalQt} </span> </div>
        <div className="flex-el"> <span>Cart Sum</span> <span> {totalPrice}$ </span> </div>
        <div className="flex-el selector"> 
            <label htmlFor="shipment-type">Shipment Method</label>
            <select onChange={this.handleChange} id="shipment_type" defaultValue="Normal">
                 <option value="Normal">Normal</option>
                 <option value="Fast">Fast</option>
            </select>
        </div>
    <div className="flex-el"> <span>Shipment Fee</span> <span>{this.state.shipment_fee}$</span></div>
        <div className="flex-el"> <span>Estimated Delivery Time</span> <span> {this.state.shipment_time}</span> </div>
        <div className="hr"> </div>
        <div className="flex-el total-sum"> <span>Total Sum</span> <span> {totalPrice + this.state.shipment_fee}$ </span> </div>
    </div>
    }
}
const mapStateToProps= (state)=> ({
    totalItems: cartItemsSelector(state),
    totalQt: cartItemsCountSelector(state),
    totalPrice: cartsPriceSelector(state)
})
export default connect(mapStateToProps)(ShipmentInfo)