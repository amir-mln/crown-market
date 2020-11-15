import React from 'react'
import CollectionItem from './CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = (props)=>(
    <div className="collection-preview" >
        <h3 className="title" >{props.title}</h3>
        <div className="preview">
            {
                props.items.filter( (item, index) => index < 4 ).map( item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)
export default CollectionPreview