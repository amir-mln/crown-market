import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {currentUserSelector} from './redux/Selectors/user-selector';
import {checkUserSession} from './redux/Actions/user-action';

import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import SignInUpPage from './Pages/SignInUpPage';
import ShipmentInfo from './Pages/CheckOut-Shipment';
import CartItemsPage from './Pages/CartItemsPage';
import './App.css'; 



class App extends React.Component {
  // unsubscribeFromAuth = null;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch( checkUserSession() );
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  render(){
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/clothe" component={ShopPage}/>
          <Route exact path="/sign-in-up" render={()=>this.props.currentUser? <Redirect to='/'/> : <SignInUpPage/>} />
          <Route exact path="/check-out" component={CartItemsPage}/>
          <Route exact path="/check-out-shipment" component={ShipmentInfo}/>
      </Switch>
    </div>
    ); 
  }
}

const mapStateToProps = state=>({
  currentUser: currentUserSelector(state), 
})

export default connect(mapStateToProps)(App);
