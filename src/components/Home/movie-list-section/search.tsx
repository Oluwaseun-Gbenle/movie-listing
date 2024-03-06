import { useEffect, useState } from "react";
import Loader from "../../../loader/loader"
import MovieCard from "./movie-card"
import { fetchData } from "../../fetch-data-function";
import fetchedMovieList from "../../axios";
import request from "../../request";
import { MovieInterface } from "../../../interfaces/MovieInterface";

const Search: React.FC<{
    movies: MovieInterface[];
    setMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
}> = ({ movies, setMovies }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData(request.fetchTrending, setMovies, fetchedMovieList, setIsLoading);
    }, [setMovies]);
console.log('movie',movies)
    return (
        <div>
            {movies.length > 0 ?
                <>
                    <div>
                        <div className="mt-6  pb-16  grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
                            {movies?.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} movies={movies} setMovies={setMovies} />
                            ))}
                        </div>
                    </div>
                </>
                :
                <div className="text-red-600 text-2xl text-center">Sorry, couldn't find anything related to movie searched</div>
            }
            {isLoading ? <Loader /> : ''}
        </div>
    )
}

export default Search