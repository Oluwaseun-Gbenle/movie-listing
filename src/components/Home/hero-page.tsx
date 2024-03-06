import { useEffect, useState } from 'react';
import './home.css'
import fetchedMovieList from '../axios';
import request from '../request';
import { MovieInterface } from '../../interfaces/MovieInterface';
import Loader from '../../loader/loader';

const HeroPage: React.FC<{
  setSearchIsActive: (searchIsActive: boolean) => void, movies: MovieInterface[];
  setMovies: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
}> = ({ setSearchIsActive, movies, setMovies }) => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<MovieInterface>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const req = await fetchedMovieList.get(request.fetchTrending);

      setBackgroundImageUrl(
        req.data.results[
        Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      setIsLoading(false);
    }
    fetchData();
  }, []);


  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return; // To Avoid searching for empty or whitespace-only queries

    setIsLoading(true);
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setMovies(filteredMovies.length > 0 ? filteredMovies : []);
    setIsLoading(false);
  };

  return (
    <>
      <section className="hero-bg flex justify-center items-center p-12" style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${backgroundImageUrl?.backdrop_path}")`,
      }}>
        <div className='w-full'>
          <div className="text-2xl sm:text-[51px] text-center font-bold">Welcome!</div>
          <div className="font-bold text-base sm:text-3xl mt-2 text-center">Discover and explore recent and trending Movies & TV Shows</div>
          <div className='md:flex justify-center hidden'>
            <div className="hero-btn-bg w-[80%] p-1 rounded-full mt-8 ">
              <input type="text" placeholder='Search...' className='px-6 focus:outline-none text-[21px] arial rounded-full w-[70%] md:w-[80%] p-1 text-black'
                onChange={(e) => { e.target.value ? setSearchIsActive(true) : setSearchIsActive(false); setSearchQuery(e.target.value); }}
              />
              <button className='arial sm:text-[21px] text-center w-full sm:w-[19%]' onClick={handleSearchSubmit}> Show Me!</button>
            </div>
          </div>
          <input type="text" placeholder='Search...' className='px-6 mx-auto focus:outline-none text-base arial w-[80%] rounded-full p-1 text-black md:hidden mt-4 block'
            onChange={(e) => { e.target.value ? setSearchIsActive(true) : setSearchIsActive(false); setSearchQuery(e.target.value); }}
          />
          <button className='arial text-center md:hidden hero-btn-bg rounded-full p-1 px-6 mx-auto w-[80%] block mt-4' onClick={handleSearchSubmit}> Show Me!</button>
        </div>
        {isLoading ? <Loader /> : ''}
      </section>

    </>
  )
}

export default HeroPage