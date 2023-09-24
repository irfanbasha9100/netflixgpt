import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import Main from './Main'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
  //data fetching hook
  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> : 
      (
        <>
        <Main />
        <SecondaryContainer />
      </>

      )
        
      }


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