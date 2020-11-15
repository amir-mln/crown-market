import React from 'react'
import {connect} from 'react-redux'
import {collectionSelector} from '../redux/Selectors/shop_selector'
import CollectionItem from '../Components/CollectionItem'

import './CollectionPage.scss'

const CollectionPage= ({collection})=>(
    <div className="collection-page">
        <h2 className='title'>{collection.title}</h2>
        <div className='items'>
            {
                collection.items.map( item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)
const mapStateToProps= (state, ownProps)=> ({
    collection: collectionSelector(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)