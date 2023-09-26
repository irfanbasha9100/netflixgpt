import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utilis/constants'
const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='w-full object-cover ' src={BG_IMG} alt='logo' />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch