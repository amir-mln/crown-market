import React from 'react';
import {connect} from 'react-redux';
import {currentUserSelector} from '../redux/Selectors/user-selector';
import {firestore} from '../firebase/firebase.util'

import FormInput from '../Components/FormInput'
import CustomButton from '../Components/CustomButton'
import './ShipmentForm.scss'
import CusmtomButton from '../Components/CustomButton';
import { withRouter } from 'react-router-dom';

class ShipmentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current_address: false,
            first_name: '',
            last_name: '',
            address:'',
            zip_code: '',
            phone_number:'',
        }
    }

    // componentDidMount(){
    //     const {currentUser} = this.props;
    //     const docRef2= firestore.collection('users').doc(currentUser.uid).collection('addresses').doc('current-address')
    //     docRef2.get().then((doc)=>{
    //         if(doc.exists){
    //             const existingAddress= doc.data();
    //             this.setState({...existingAddress})
    //         }
    //     })
    // }
    handleChange=(e)=>{
        const {name,value}= e.target;
        this.setState({[name]:value})
    }
    
    handleSubmit= (e)=>{
        e.preventDefault();
        const {currentUser} = this.props;
        const docRef= firestore.collection('users').doc(currentUser.id)

        if(this.state.current_address==='false'){
        docRef.collection('addresses').doc(new Date()).set({ ...this.state } ) }
        
        if(this.state.current_address==='true'){
        docRef.collection('addresses').doc('current-address').set({ ...this.state } ) }
        
        this.props.history.push('/check-out-payment')
    }
    goBackWard= ()=>{
        const {history}= this.props;
        history.push('/check-out')
    }
    handleSelectChange= (e)=>{
        const {value} = e.target;
        if(value==='false'){
            this.setState({
                current_address: false,
                first_name: '',
                last_name: '',
                address:'',
                zip_code: '',
                phone_number:'',
            })
        }
        if(value==='true'){
            const {currentUser} = this.props;
            const docRef2= firestore.collection('users').doc(currentUser.id).collection('addresses').doc('current-address')
            docRef2.get().then((doc)=>{
                if(doc.exists){
                    const existingAddress= doc.data();
                    this.setState({...existingAddress})
                }
            })
        }
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
                <span className="address-selector">
                    <label htmlFor="current-address">Send To</label>
                    <select defaultValue={false} onChange={this.handleSelectChange} name='current-address'>
                        <option value={false}>New Address</option>
                        <option value={true}>My Address</option>
                    </select>
                </span>
                <span className="first-input">
                    <FormInput 
                        type="text" 
                        name='first_name'
                        label="First Name"
                        value={this.state.first_name}
                        onChange={this.handleChange}
                        required 
                    />
                </span>
                <span className="second-input">
                    <FormInput 
                        type="text" 
                        name='last_name'
                        label="Last Name"
                        value={this.state.last_name}
                        onChange={this.handleChange}
                        required 
                    />
                </span> 
                <span className="third-input">
                    <FormInput 
                        type="text" 
                        name='address'
                        label="Address"
                        value={this.state.address}
                        onChange={this.handleChange}
                        required 
                    />
                </span>   
                <span className="fourth-input">
                    <FormInput 
                        type="number" 
                        name='zip_code'
                        label="Zip Code"
                        value={this.state.zip_code}
                        onChange={this.handleChange}
                        required 
                    />
                </span>
                <span className="fifth-input"> 
                    <FormInput 
                        type="number" 
                        name='phone_number'
                        label="Phone Number"
                        value={this.state.phone_number}
                        onChange={this.handleChange}
                        required 
                    />
                </span>

                <span className="sp-buttons">
                    <CusmtomButton onClick={this.goBackWard}>Go Back To My Cart</CusmtomButton>
                    <CustomButton type='submit'>Add Address</CustomButton>
                </span>
            </form>
    }
}

const mapStateToProps= (state)=>({
    currentUser: currentUserSelector(state) 
})
export default withRouter( connect(mapStateToProps)(ShipmentForm) );