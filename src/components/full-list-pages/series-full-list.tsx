import { useEffect, useState } from 'react'
import MovieCard from '../Home/movie-list-section/movie-card'
import { fetchData } from '../fetch-data-function';
import { MovieInterface } from '../../interfaces/MovieInterface';
import fetchedMovieList from '../axios';
import request from '../request';
import Loader from '../../loader/loader';

const SeriesFullList = () => {
    const [movies, setMovies] = useState<MovieInterface[]>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData(request.fetchPopularSeries, setMovies, fetchedMovieList, setIsLoading);
    }, []);
    return (
        <div>
            <div className='w-[70%] mx-auto mt-10'>
                <div className="mt-6  pb-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} series={true} movie={movie} movies={movies} setMovies={setMovies} />
                    ))}
                </div>
            </div>
            {isLoading ? <Loader /> : ''}
        </div>
    )
}

export default SeriesFullList