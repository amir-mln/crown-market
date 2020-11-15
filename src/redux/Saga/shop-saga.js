import {takeEvery, call, put} from 'redux-saga/effects'
import {firestore, convertSnapshotToMap} from '../../firebase/firebase.util'
import {fetchCollectionSuccess,fetchCollectionFailure} from '../Actions/shop-action'

export function* fetchCollectionAsync(){
   // yield console.log('I am fired')

    try{
        const collectionRef= yield firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionFailure(error.message));
    }

    // collectionRef.get().then(snapShot => {
    //     const collectionsMap= convertSnapshotToMap(snapShot) 
    //     dispatch(fetchCollectionSuccess(collectionsMap))
    // }).catch( error=> dispatch( fetchCollectionFailure(error.message) ) )
}

export function* fetchCollectionStart(){
    yield takeEvery('FETCH_COLLECTIONS_START', fetchCollectionAsync )
}