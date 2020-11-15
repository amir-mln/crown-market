import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config= {
    apiKey: "AIzaSyAatmYweP5I4gi-idFbey7ND8gQuKN5WYo",
    authDomain: "crown-market-v1.firebaseapp.com",
    databaseURL: "https://crown-market-v1.firebaseio.com",
    projectId: "crown-market-v1",
    storageBucket: "crown-market-v1.appspot.com",
    messagingSenderId: "1074735068721",
    appId: "1:1074735068721:web:185f7a05969988798d8710",
    measurementId: "G-35TDNBCK24"
};

firebase.initializeApp(config)

export const createUserProfileDocument= async(userAuth, additionalData)=> {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date();
      try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
      }  catch(error){
            console.log('Error creating user', error.message)
      }
    } 
  return userRef;
}

export const addColAndDoc= async (collectionKey, objectsToAdd)=>{
  const collectionRef= firestore.collection(collectionKey);
  const batch= firestore.batch();
  objectsToAdd.forEach( obj => {
      const newDocRef= collectionRef.doc();
      batch.set(newDocRef, obj )
  });
  return await batch.commit()
}

export const convertSnapshotToMap= (collections)=>{
  const transformedCollection = collections.docs.map( doc =>{
    const { title, items} = doc.data();
    return{
      id: doc.id,
      title,
      routeName: encodeURI(title.toLowerCase()),
      items
    }
  } )

  return transformedCollection.reduce((accumulator, collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {}) 
}

export const getCurrentUser= ()=>{
  return new Promise((resolve, reject)=>{
    const unsubscribe= auth.onAuthStateChanged( userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject) 
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);

export default firebase;