import { useEffect, useState } from "react";
import Loader from "../../../loader/loader"
import MovieCard from "./movie-card"
import { fetchData } from "../../fetch-data-function";
import fetchedMovieList from "../../axios";
import { useNavigate } from "react-router-dom";
import request from "../../request";
import { MovieInterface } from "../../../interfaces/MovieInterface";

const Search: React.FC<{
    movies: MovieInterface[];
    setMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
}> = ({ movies, setMovies }) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData(request.fetchTrending, setMovies, fetchedMovieList, setIsLoading);
    }, [setMovies]);

    return (
        <div>
            {movies ?
                <>
                    <div className='flex justify-between '>
                        <div className='hover:bg-[#ff2901] hover:rounded-full p-2 px-8 cursor-pointer' onClick={() => { navigate('/trending') }}>View all</div>
                    </div>
                    <div>
                        <div className="mt-6  pb-16  grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
                            {movies?.slice(0, 4)?.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} movies={movies} setMovies={setMovies} />
                            ))}
                        </div>
                    </div>
                </>
                :
                <div className="text-red-600 text-xl">Sorry couldn't find anything related</div>
            }
            {isLoading ? <Loader /> : ''}
        </div>
    )
}

export default Search