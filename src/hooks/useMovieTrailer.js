import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utilis/movieSlice";

const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();
    //need movie id for trailer fetch
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        //console.log(json);
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        getMovieVideos();
    }, [])

}
export default useMovieTrailer;