import React from 'react'
import {withRouter} from 'react-router-dom'

import {ReactComponent as CartIcon} from '../Assets & Utilities/cart-icon.svg';
import {ReactComponent as ClipboardIcon} from '../Assets & Utilities/clipboard.svg';
import {ReactComponent as PayIcon} from '../Assets & Utilities/pay.svg';

import './StepProgress.scss'

class StepProgress extends React.Component{
    constructor(){
        super();
        this.state={
            step: ''
        }
    }

    componentDidMount(){
        const {match} = this.props;
        if(match.path==='/check-out'){
            this.setState({step: 'one'})
        }
        if(match.path==='/check-out-shipment'){
            this.setState({step: 'two'})
        }
        if(match.path==='/check-out-payment'){
            this.setState({step: 'three'})
        }
    }

    handleIcons= (childNumber)=>{
        const {step} = this.state;
        if (step==='one'){
            if(childNumber==='one'){
                return <span className="utf-icon active" role="img" aria-label='step-icon'>&#10068;</span>
            }
            if(childNumber==='two'){
                return <span className="utf-icon" role="img" aria-label='step-icon'>&#10068;</span>
            }
            if(childNumber==='three'){
                return <span className="utf-icon" role="img" aria-label='step-icon'>&#10068;</span>
            }
        }
        if (step==='two'){
            if(childNumber==='one'){
                return <span className="utf-icon active step-two">&#10004;</span>
            }
            if(childNumber==='two'){
                return <span className="utf-icon active step-two" role="img" aria-label='step-icon'>&#10068;</span>
            }
            if(childNumber==='three'){
                return <span className="utf-icon" role="img" aria-label='step-icon'>&#10068;</span>
            }
        }
        if (step==='three'){
            if(childNumber==='one'){
                return <span className="utf-icon active step-two">&#10004;</span>
            }
            if(childNumber==='two'){
                return <span className="utf-icon active step-two step-three">&#10004;</span>
            }
            if(childNumber==='three'){
                return <span className="utf-icon step-three" role="img" aria-label='step-icon'>&#10068;</span>
            }
        }
    }
    render(){
        return <div className="progress-bar">
                <ul>
                    <li>
                        <CartIcon className="icon"/>
                        <p className="label-text">review your cart</p>
                        {this.handleIcons('one')}
                    </li>
                    <li>
                        <ClipboardIcon className="icon"/>
                        <p className="label-text">fill in the form</p>
                        {this.handleIcons('two')}
                    </li>
                    <li>
                        <PayIcon className="icon"/>
                        <p className="label-text">make payment </p>
                        {this.handleIcons('three')}
                    </li>
                </ul>
            </div>
    }
}
export default withRouter(StepProgress);