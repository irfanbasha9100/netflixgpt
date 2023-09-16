import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValideData } from '../utilis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utilis/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice';

const Login = () => {

  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null)
  const password = useRef(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValideData(email.current.value, password.current.value)
    //console.log(message);

    //setting the error message
    setErrorMessage(message)
    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      //firebase code setted
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage)
          // ..
        });

    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage)
        });

    }

    //sign in //sign up
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='logo' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='text-white absolute p-12 my-36 mx-auto right-0 left-0 bg-black w-3/12 rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : 'Sign Up'}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='rounded-lg p-4 my-4 w-full bg-gray-700'></input>}
        <input ref={email} type='text' placeholder='Email Address' className='rounded-lg p-4 my-4 w-full bg-gray-700'></input>

        <input ref={password} type='password' placeholder='Password' className='rounded-lg p-4 my-4 w-full bg-gray-700'></input>
        <p className='font-bold text-lg py-2 text-red-700'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInform}>{isSignInForm ? "New to Netflix ? Sign Up now" : 'Already Register ? Sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login;