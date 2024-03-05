import { useEffect, useState } from 'react'
import MovieCard from '../Home/movie-list-section/movie-card'
import { fetchData } from '../fetch-data-function';
import { MovieInterface } from '../../interfaces/MovieInterface';
import fetchedMovieList from '../axios';
import request from '../request';
import Loader from '../../loader/loader';

const TrendingFullList = () => {
    const [movies, setMovies] = useState<MovieInterface[]>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData(request.fetchTrending, setMovies, fetchedMovieList, setIsLoading);
    }, []);
    return (
        <div>
            <div className='w-[70%] mx-auto mt-10'>
                <div className="mt-6  pb-16 grid grid-cols-4 gap-8">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} series={false} movie={movie} movies={movies} setMovies={setMovies} />
                    ))}
                </div>
            </div>
            {isLoading ? <Loader /> : ''}
        </div>
    )
}

export default TrendingFullList