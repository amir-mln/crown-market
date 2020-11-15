import React from 'react'
import './CustomButton.scss'

const CusmtomButton=({ children, googleSignIn, inverted, ...props}) => (
    <button 
        className= { `custom-button ${inverted? 'inverted':''} ${googleSignIn? 'googleSignIn': ''}` } 
        {...props}
    >
        {children}
    </button>
)
export default CusmtomButton;