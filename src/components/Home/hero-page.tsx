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
          <div className="text-[51px] text-center font-bold">Welcome!</div>
          <div className="font-bold text-3xl mt-2 text-center">Discover and explore recent and trending Movies & TV Shows</div>
          <div className='flex justify-center'>
            <div className="hero-btn-bg w-[80%] p-1 rounded-full mt-8">
              <input type="text" placeholder='Search...' className='px-6 focus:outline-none text-[21px] arial rounded-full w-[80%] p-1 text-black' />
              <button className='arial text-[21px] text-center w-[19%]'> Show Me!</button>
            </div>
          </div>
        </div>
        {isLoading ? <Loader /> : ''}
      </section>

    </>
  )
}

export default HeroPage