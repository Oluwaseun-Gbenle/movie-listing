import { useEffect, useState } from "react";
import { MovieInterface } from "../../interfaces/MovieInterface";
import fetchedMovieList from "../axios";
import request from "../request";
import { useParams } from "react-router-dom";
import './movie.css'
import { ConvertMinutesToHours } from "../../utils";
import Loader from "../../loader/loader";

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieInterface>();
    const url = `/movie/${id}?${request.fetchSingleMovie}`;
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(false);
            const req = await fetchedMovieList.get(url);
            setMovie(req.data);
            setIsLoading(false);
        }
        fetchData()
    }, [url]);

    return (
        <div className="movie-bg" style={{ backgroundImage: `url(${baseUrl}${movie?.backdrop_path})` }}>
            <div className="md:flex justify-between gap-x-8 mx-6 md:mx-20 pb-6 md:pb-0">
                <div className="md:min-w-[30%] lg:w-[30%] py-4 md:py-0 md:my-20 relative z-20 h-auto">
                    <img src={`${baseUrl}${movie?.poster_path}`} alt="poster" />
                </div>
                <div className="md:min-w-[30%] lg:w-[40%] relative z-20 flex items-center h-auto mt-6 md:mt-0">
                    <div>
                        <div className="text-2xl font-bold Roboto-Mono-font">{movie?.original_title}</div>
                        <div className="mt-4 italic">{movie?.tagline}</div>
                        <div className="Roboto-Mono-font mt-4 text-[19px] font-bold">Overview</div>
                        <div className="mt-4">{movie?.overview}</div>
                        <div className=" flex gap-x-3 mt-4 items-center"><div className="text-[19px] font-bold">Genres:</div>
                            {movie?.genres.map((item) => (
                                <div key={item.id} className="mt-1">
                                    {item.name}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex gap-x-3 items-center">Runtime: <div className="text-base font-normal">{ConvertMinutesToHours(movie?.runtime || 0)}</div></div>
                    </div>
                </div>
            </div>
            {isLoading ? <Loader /> : ''}
        </div>
    )
}

export default Movie