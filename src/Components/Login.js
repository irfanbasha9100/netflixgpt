import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='logo' />
      </div>
      <form className='text-white absolute p-12 my-36 mx-auto right-0 left-0 bg-black w-3/12 rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : 'Sign Up'}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='rounded-lg p-4 my-4 w-full bg-gray-700'></input> }
        <input type='text' placeholder='Email Address' className='rounded-lg p-4 my-4 w-full bg-gray-700'></input>
        
        <input type='password' placeholder='Password' className='rounded-lg p-4 my-4 w-full bg-gray-700'></input>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInform}>{isSignInForm ? "New to Netflix ? Sign Up now" : 'Already Register ? Sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login;