import React, { useRef } from 'react'
import lang from '../utilis/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utilis/openai'
import { API_OPTIONS } from '../utilis/constants'
import { addGptMovieResult } from '../utilis/gptSlice'
const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Movie Search in TMDB 

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const langKey = useSelector(store => store.config.lang)
  const handleGptSearchClick = async () => {
    //API calling 
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :" + searchText.current.value + "Only gave me names of 5 movies , comma separated like the example rsult given ahead.Example Result: Gadar , Sholey , Don , Golmaal , Kio Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    //console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies);

    //for each movie tmdb api and find out the result of that movie

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    //[Promise,Promise,Promise,Promise,Promise]
    const tmdbResults = await Promise.all(promiseArray);//takes the array of promise 
    console.log(tmdbResults);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))
  }
  return (
    <div className='pt-[8%] flex justify-center'>
      <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button className='py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar