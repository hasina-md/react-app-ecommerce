import React, { createContext } from 'react';

const FIREBASE_AUTH_ERRORS = {
    'auth/invalid-login-credentials': `entered invalid email/password`,
    'auth/user-not-found': `user not found for provided email`

}

var error = {code: 'auth/invalid-login-credentials' }
var mesage = FIREBASE_AUTH_ERRORS[error.code]



const UserContext = createContext({
    user: null,
    email: null
})



function UserContext() {
  return (
    <div>UserContext</div>
  )
}

export default UserContext
