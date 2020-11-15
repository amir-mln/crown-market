import {all, call} from 'redux-saga/effects';
import { fetchCollectionStart } from './Saga/shop-saga';
import { userRootSaga } from './Saga/user-saga';

export default function* rootSaga(){
    yield all([call(fetchCollectionStart), call(userRootSaga)])
}