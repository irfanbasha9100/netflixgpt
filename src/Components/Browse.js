import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
  //data fetching hook
  useNowPlayingMovies()
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse;