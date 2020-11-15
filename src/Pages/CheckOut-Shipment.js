import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {currentUserSelector} from '../redux/Selectors/user-selector';

import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import ShipmentForm from '../Components/ShipmentForm';
import ShipmentInfoBox from '../Components/ShipmentInfo';
import StepProgress from '../Components/StepProgress';
import './CheckOut-Shipment.scss'

const ShipmentInfo =({currentUser})=>{
    Modal.setAppElement('#root');
    const [modalContent, setModalContent] = useState(true);
    return(
    <div className="shipment-page">
        <Modal 
            isOpen={!currentUser}
        >
            {modalContent===true ?  <SignIn/> : <SignUp/>}
            <p id='modal-text' onClick={()=>setModalContent(!modalContent)}>
                {modalContent===true ?   <>i need to create an account</>: <> i already have an account </> }
            </p>
        </Modal> 
        
        <span className="shipment-form">
            <ShipmentForm/>
        </span>   
        
        <ShipmentInfoBox/>           
        
        <span className="progress-indicator">
            <StepProgress/>
        </span>
    </div>
    )
}
const mapStateToProps= (state)=>({
    currentUser: currentUserSelector(state),
})
export default connect(mapStateToProps)(ShipmentInfo)