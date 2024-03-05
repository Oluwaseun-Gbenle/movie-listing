import '../home.css'
import Popular from './popular-movies';
import Series from './series';
import Trending from './trending';

const MovieList = () => {

    return (
        <>
            <section className='pt-6 flex justify-center'>
                <div className="w-[95%] sm:w-[90%] lg:w-[75%] mx-auto">
                    <Trending />
                    <Popular />
                    <Series/>
                </div>
            </section>
        </>
    )
}

export default MovieList