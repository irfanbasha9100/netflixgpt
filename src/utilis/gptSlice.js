import { createSlice } from '@reduxjs/toolkit'

export const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies:null,
        movieNames:null,
        movieResults:null,

    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults} = action.payload
            state.gptMovies = action.payload
            state.movieResults = movieResults
            state.movieNames=movieNames
        },

    },
})

// Action creators are generated for each case reducer function
export const { toggleGptSearchView,addGptMovieResult } = gptSlice.actions

export default gptSlice.reducer