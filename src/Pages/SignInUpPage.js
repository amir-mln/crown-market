import React from 'react'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'
import './SignInUpPage.scss'

const SignInUpPage = ()=> (
    <div className='SignInUpPage'>
        <SignIn id="signIn"/>
        <SignUp id="signUp"/>
    </div>
)

export default SignInUpPage