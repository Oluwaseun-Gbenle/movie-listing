import { useEffect, useState } from 'react';
import { MovieInterface } from '../../../interfaces/MovieInterface';
import fetchedMovieList from '../../axios';
import request from '../../request';
import MovieCard from './movie-card';
import { fetchData } from '../../fetch-data-function';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../loader/loader';
const Series = () => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState<MovieInterface[]>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData(request.fetchPopularSeries, setMovies, fetchedMovieList, setIsLoading);
    }, []);



    return (
        <div>
            <div className='flex justify-between '>
                <div>
                    <div className='text-2xl font-bold'>Popular Series</div>
                    <div className="title-underline  py-[1px] mt-2  w-[120%] sm:w-[150%]"></div>
                </div>
                <div className='hover:bg-[#ff2901] hover:rounded-full p-2 px-8 cursor-pointer' onClick={() => { navigate('/series') }}>View all</div>
            </div>
            <div>
                <div className="mt-6  pb-16  grid sm:grid-cols-2 lg:grid-cols-4  gap-7">
                    {movies?.slice(0, 4)?.map((movie) => (
                        <MovieCard key={movie.id} series={true} movie={movie} movies={movies} setMovies={setMovies} />
                    ))}
                </div>
            </div>
            {isLoading ? <Loader /> : ''}
        </div>
    )
}

export default Series