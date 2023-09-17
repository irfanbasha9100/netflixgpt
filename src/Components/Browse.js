import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

import SecondaryContainer from './SecondaryContainer'
import Main from './Main'


const Browse = () => {
  //data fetching hook
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <Main/>
      <SecondaryContainer/>
      {/* {Main container
      -Video Back Ground
      -Video Title
      Secondary Container
      -MovieList
      -Rows*n} */}
    </div>
  )
}

export default Browse;