import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utilis/userSlice';
import { logo, logo_1 } from '../utilis/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });

  }
  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName,photoURL } = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse")
        } else {
            // User is signed out
            dispatch(removeUser())
            navigate("/")
        }
    });
    //this will be called when component unmounts
    return ()=>unsubscribe ();
}, [])
  return (
    <div className=' flex w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between '>
      <img className='w-44' src={logo}
        alt='logo' />
      {user && (<div className='flex p-2'>
        <img src={logo_1} alt='User-icon' className=' w-12 h-12 ' />
        <button onClick={handleSignOut} className='font-bold text-white'> Sign Out </button>
      </div>)}
    </div>
  )
}

export default Header