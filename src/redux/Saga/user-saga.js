import {takeLatest, put, all, call} from 'redux-saga/effects';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.util';
import {signingSuccess, signingFailure, signOutSuccess} from '../Actions/user-action';
import {clearCartOut} from '../Actions/cart-action';

export function* signInWithGoogle() {
    try{
        const {user}= yield auth.signInWithPopup(googleProvider);
        const userRef= yield call(createUserProfileDocument, user);
        const userSnapShot= yield userRef.get();
        yield put(signingSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
    }catch(error) {
        yield put( signingFailure(error) )
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle)
}
// ****************************************

export function* signInWithEmail({payload: {email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef= yield call(createUserProfileDocument, user);
        const userSnapShot= yield userRef.get();
        yield put(signingSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
    }catch(error){
        yield put(signingFailure(error))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest('EMAIL_SIGN_IN_START', signInWithEmail)
}
// ****************************************

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userRef= yield call(createUserProfileDocument, userAuth);
        const userSnapShot= yield userRef.get();
        yield put(signingSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
    }catch(error){
        yield put(signingFailure(error));
    }
}

export function* onCheckUserSession(){
    yield takeLatest('CHECK_USER_SESSION', isUserAuthenticated)
}
// ****************************************

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
        yield put(clearCartOut());
    } catch (error) {
        yield put(signingFailure(error))
    }
}

export function* onSignOutStart(){
    yield takeLatest('SIGN_OUT_START', signOut)
}
// ****************************************

export function* signUpSaga({payload: {email, passwordA, displayName} }){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, passwordA); 
        const userRef = yield call (createUserProfileDocument, [user, displayName]);
        const userSnapshot = yield userRef.get()
        yield put(signingSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch(error){
        yield put(signingFailure(error));
    }
}

export function* onSignUpStart(){
    yield takeLatest('SIGN_UP_START', signUpSaga)
}
// ****************************************

export function* userRootSaga() {
    yield all([
        call(onCheckUserSession),
        call(onSignUpStart),
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onSignOutStart)
    ])
}