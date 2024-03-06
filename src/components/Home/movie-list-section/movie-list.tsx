import { MovieInterface } from '../../../interfaces/MovieInterface';
import '../home.css'
import Popular from './popular-movies';
import Search from './search';
import Series from './series';
import Trending from './trending';

const MovieList: React.FC<{
    searchIsActive: boolean; movies: MovieInterface[];
    setMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
}> = ({ searchIsActive, movies, setMovies }) => {
    return (
        <>
            <section className='pt-6 flex justify-center'>
                <div className="w-[95%] sm:w-[90%] lg:w-[75%] mx-auto">
                    {searchIsActive ?
                        <Search movies={movies} setMovies={setMovies} />
                        :
                        <>
                            <Trending />
                            <Popular />
                            <Series />
                        </>
                    }
                </div>
            </section>
        </>
    )
}

export default MovieList