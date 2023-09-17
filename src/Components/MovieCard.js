import React from 'react'
import {IMG_CDN_URL} from '../utilis/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 pr-4 rounded-lg'>
        <img src={IMG_CDN_URL+posterPath} alt='Movie-card'/>
    </div>
  )
}

export default MovieCard