import React from 'react';
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import {googleSignInStart, emailSignInStart} from '../redux/Actions/user-action'
import './SignIn.scss'
import { connect } from 'react-redux';

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        const {name, value} = e.target
        this.setState({ [name]: value })
    }
    handleSubmit= async (e)=>{
        e.preventDefault();
        const {email, password} = this.state;
        const {dispatch} = this.props;
        dispatch(emailSignInStart({email, password}))

    }
    render(){
        const {dispatch} = this.props;
        return (
            <div className='sign-in-component'>
                <h2>i already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="Email" 
                        required 
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="Password" 
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={()=> dispatch(googleSignInStart())} googleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(SignIn);