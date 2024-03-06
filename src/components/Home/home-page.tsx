import { useState } from 'react'
import HeroPage from './hero-page'
import MovieList from './movie-list-section/movie-list'
import { MovieInterface } from '../../interfaces/MovieInterface'

const HomePage = () => {
    const [searchIsActive, setSearchIsActive] = useState(false)
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    return (
        <>
            <HeroPage setSearchIsActive={setSearchIsActive} setMovies ={setMovies} />
            <MovieList searchIsActive={searchIsActive} movies={movies} setMovies ={setMovies} />
        </>
    )
}

export default HomePage