import React from 'react';
import {connect} from 'react-redux';
import {signUpStart} from '../redux/Actions/user-action'

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import './SignUp.scss'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            passwordA: '',
            passwordB: '',
            email: '',
        }
    }
    
    handleSubmit= (e)=> {
        e.preventDefault();
        const {dispatch} = this.props;

        if(this.state.passwordA !== this.state.passwordB) {
            alert("Passwords don't match")
            return
        }
        dispatch( signUpStart(this.state) )
        this.setState({
            displayName:'',
            passwordA: '',
            passwordB: '',
            email: '',
        })
    }
    
    handleChange=(e) =>{
        const {name, value} = e.target;
        this.setState( {[name]: value} )
    }
    render(){
        return (
            <div className="sign-up-component">
                <h2>i don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        label="Name" 
                        value={this.state.displayName} 
                        handleChange={this.handleChange} 
                        required 
                    />
                    <FormInput 
                        type="password" 
                        name="passwordA" 
                        label="Password" 
                        value={this.state.passwordA} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="passwordB" 
                        label="Confirm Password"
                        value={this.state.passwordB} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="Email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <CustomButton type="submit" value="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    } 
}

export default connect()(SignUp);