import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {hiddenStatusSelector} from '../redux/Selectors/cart-selector'; 
import {currentUserSelector} from '../redux/Selectors/user-selector';
import {createStructuredSelector} from 'reselect';
import {signOutStart} from '../redux/Actions/user-action';

import CartIcon from './CartIcon';
import CartDropDown from './CartDropDown';
import {ReactComponent as Logo} from '../Assets & Utilities/crown-icon.svg'
import './Header.scss'

const Header= ({currentUser, hideCart, dispatch})=> (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className='option' to='/clothe'>Clothes</Link>
            <Link className='option' to='/contact-us'>Contact Us</Link>
            {   
                currentUser? 
                <span className='option' onClick={ ()=> dispatch(signOutStart())}>Sign Out</span> 
                : <Link className='option' to='/sign-in-up'>Sign In/Up</Link>
            }
        </div>
        <CartIcon className='cart-icon'/>
        {
            hideCart? null:<CartDropDown/>
        }
        <div className="line"></div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hideCart: hiddenStatusSelector
}) 

export default connect(mapStateToProps)(Header)