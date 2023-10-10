import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { firebaseApp } from '../firebaseApp';

function AuthenticationView({ isLogin }) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isLoginFailed, setIsLoginFailed] = useState(false);
   const [noUserLogin, setUserLogin] = useState(false);
   const [error, setError] = useState(null);
   const title = isLogin? 'Login' : 'Signup';

   const handleAuthentication = (event) => {
    const formData = {
    email,
    password
    }
    console.log("::handleAuthentication::", title, isLogin, formData)
    
    event.preventDefault()
    const auth = getAuth(firebaseApp);

    if(isLogin) {
      setIsLoginFailed(false);
      setUserLogin(false);
      signInWithEmailAndPassword(auth, email, password)
      .then(res => console.log("::LOGIN RESPONSE::", res))
      .catch(error =>setError(error.code) )
      

      if(error.code == 'auth/invalid-login-credentials') {
        setError(true);
      }
    }

    else {
      createUserWithEmailAndPassword(auth, email, password)
      .then(res => console.log("::SIGNUP RESPONSE::", res))
      .catch(error => console.log(error))
    }  
  };

  return (
    <form onSubmit={handleAuthentication}>
   <h2>{title}</h2>
   
   <div className='text-red-600 p-3 m-2'>{error && "ENTERED WRONG Email Or Password, Please Check Once Again...."}</div>

   <input 
    type="email"
    placeholder="Email"
    value={email}
    onChange={e => setEmail(e.target.value)}  
    className='border solid border-2 border-grey-600 m-3' 
   />
   
   <input 
    type="password"
    placeholder="Password"
    value={password}
    onChange={e => setPassword(e.target.value)}  
    className='border solid border-2 border-grey-600 m-3' 
 
   />
    <button className='bg-slate-700 text-white px-4 rounded-lg m-3'>{title}</button>


    </form>
  )
}

export default AuthenticationView