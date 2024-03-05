import { useEffect, useState } from 'react';
import './home.css'
import fetchedMovieList from '../axios';
import request from '../request';
import { MovieInterface } from '../../interfaces/MovieInterface';
import Loader from '../../loader/loader';

const HeroPage = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<MovieInterface>();
  const [isLoading, setIsLoading] = useState(false);

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
              <input type="text" placeholder='Search...' className='px-6 focus:outline-none text-[21px] arial rounded-full w-[70%] md:w-[80%] p-1 text-black' />
              <button className='arial sm:text-[21px] text-center w-full sm:w-[19%]'> Show Me!</button>
            </div>
          </div>
          <input type="text" placeholder='Search...' className='px-6 mx-auto focus:outline-none text-base arial w-[80%] rounded-full p-1 text-black md:hidden mt-4 block' />
              <button className='arial text-[21px] text-center md:hidden hero-btn-bg rounded-full p-1 px-6 mx-auto w-[80%] block mt-4'> Show Me!</button>
        </div>
        {isLoading ? <Loader /> : ''}
      </section>

    </>
  )
}

export default HeroPage