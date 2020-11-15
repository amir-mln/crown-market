const googleSignInStart= ()=> ({
   type: 'GOOGLE_SIGN_IN_START'
})

const emailSignInStart= (emailAndPassword)=> ({
   type: 'EMAIL_SIGN_IN_START',
   payload: emailAndPassword
})

const signUpStart= (signUpData)=>({
   type: 'SIGN_UP_START',
   payload: signUpData
})

const signingSuccess= (user)=> ({
   type: 'SIGNING_SUCCESS',
   payload: user
})

const signingFailure= (error)=> ({
   type: 'SIGNING_FAILURE',
   payload: error
})

const checkUserSession= ()=>({
   type: 'CHECK_USER_SESSION'
})

const signOutStart= ()=> ({
   type: 'SIGN_OUT_START'
})

const signOutSuccess= ()=> ({
   type: 'SIGN_OUT_SUCCESS'
})

// const signOutFailure= (error)=> ({
//    type: 'SIGN_OUT_FAILURE',
//    payload: error
// })



export {
   checkUserSession,
   googleSignInStart,
   emailSignInStart,
   signUpStart,
   signOutStart,
   signingFailure,
   signingSuccess,
   signOutSuccess,
}