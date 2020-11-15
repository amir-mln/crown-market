export const fetchCollectionStart= ()=>( {
    type: 'FETCH_COLLECTIONS_START'
} )

export const fetchCollectionSuccess= (collectionsMap)=> ({
    type: 'FETCH_COLLECTIONS_SUCCESS',
    payload: collectionsMap
})

export const fetchCollectionFailure= (errorMessage)=> ({
    type: 'FETCH_COLLECTIONS_FAILURE',
    payload: errorMessage
})
//using redux-thunk
// export const fetchCollectionStartAsync= ()=>{
//     return (dispatch) => {
//         const collectionRef= firestore.collection('collections');
//         dispatch(fetchCollectionStart());

//         collectionRef.get().then(snapShot => {
//             const collectionsMap= convertSnapshotToMap(snapShot) 
//             dispatch(fetchCollectionSuccess(collectionsMap))
//         }).catch( error=> dispatch( fetchCollectionFailure(error.message) ) )
//     }
// }

