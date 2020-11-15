import {createSelector} from 'reselect'

const getItems= (state)=> state.shop;

const shopItemSelector= createSelector(
    [getItems],
    shop=> shop.collections
)

const collectionSelector= (collectionId)=>createSelector(
    [shopItemSelector],
    //(collections)=> collections.find(collection=> collection.title.toLowerCase()===collectionId):no data normalization
    (collections)=> collections? collections[collectionId] : null
)

const collectionSelectorForOverview= createSelector(
    [shopItemSelector],
    (collections)=> collections? Object.keys(collections).map( key=> collections[key] ) : []
)

const collectionFetchingSelector= createSelector(
    [getItems],
    (shop) => shop.isFetching
)

export {shopItemSelector, collectionSelector, collectionSelectorForOverview, collectionFetchingSelector}