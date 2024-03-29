import { useEffect, useState } from 'react'
import MovieCard from '../Home/movie-list-section/movie-card'
import { fetchData } from '../fetch-data-function';
import { MovieInterface } from '../../interfaces/MovieInterface';
import fetchedMovieList from '../axios';
import request from '../request';
import Loader from '../../loader/loader';

const PopularMoviesFullList = () => {
    const [movies, setMovies] = useState<MovieInterface[]>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData(request.fetchPopularMovies, setMovies, fetchedMovieList, setIsLoading);
    }, []);
    return (
        <div>
            <div className='w-[90%] md:w-[70%] lg:w-[90%] xl:w-[70%] mx-auto mt-10'>
                <div className="mt-6  pb-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id}  movie={movie} movies={movies} setMovies={setMovies} />
                    ))}
                </div>
            </div>
            {isLoading ? <Loader /> : ''}
        </div>
    )
}

export default PopularMoviesFullList