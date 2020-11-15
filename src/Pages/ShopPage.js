import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCollectionStart} from '../redux/Actions/shop-action';
import WithSpinner from '../Components/WithSpinner';
import CollectionOverview from '../Components/CollectionOverview';
import CollectionPage from './CollectionPage';

import {collectionFetchingSelector,shopItemSelector} from '../redux/Selectors/shop_selector'
import './ShopPage.scss'

const WithSpinnerCollectionOverview = WithSpinner(CollectionOverview);
const WithSpinnerCollectionPage = WithSpinner(CollectionPage)


class ShopPage extends React.Component {
    componentDidMount(){
        const {dispatch}= this.props;
        dispatch(fetchCollectionStart())
        this.setState({isFetching:false})
    }

    render(){
        const {match, isFetching, isItThere}= this.props;
        return(
            <div>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props)=><WithSpinnerCollectionOverview isLoading={isFetching} {...props}/>} 
                />
                <Route  
                    path={`${match.path}/:collectionId`} 
                    render={(props)=><WithSpinnerCollectionPage isLoading={!isItThere} {...props}/>} 
                />
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    isFetching: collectionFetchingSelector(state),
    isItThere: shopItemSelector(state)
})
export default connect(mapStateToProps)(ShopPage);