import React from 'react'
import {connect} from 'react-redux'
import {collectionSelectorForOverview} from '../redux/Selectors/shop_selector'
import CollectionPreview from '../Components/CollectionPreview'

import './CollectionOverview.scss'

const CollectionOverview=({collections}) =>(
    <div className='collections-overview'>
        {collections.map( (collection)=> (
            <CollectionPreview key={collection.id} {...collection}/>
        ) )}
    </div>
)

const mapStateToProps= (state)=>({
    collections: collectionSelectorForOverview(state)
})

export default connect(mapStateToProps)(CollectionOverview);