import { useNavigate } from "react-router-dom";
import { MovieCardInterface } from "../../../interfaces/MovieCardInterface";

const MovieCard: React.FC<MovieCardInterface> = ({ series, movie, movies, setMovies }) => {
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const navigate = useNavigate();

    const onSvgClick = (movieId: number) => {
        const updatedMovies = movies?.map((item) => {
            if (item.id === movieId) {
                return { ...item, clicked: !item.clicked };
            }
            return item;
        });

        setMovies(updatedMovies);

        // Update localStorage
        interface ClickedMovies {
            [key: number]: boolean;
        }
        const clickedMovies: ClickedMovies = updatedMovies?.reduce((acc, curr) => {
            console.log("2", acc[curr.id])
            if (curr.clicked) acc[curr.id] = true;
            else delete acc[curr.id]; // Remove the entry if the movie is unclicked
            return acc;
        }, JSON.parse(localStorage.getItem('clickedMovies') || '{}'));

        localStorage.setItem('clickedMovies', JSON.stringify(clickedMovies));
        return updatedMovies;
    };
    return (
        <div className="movie-card-bg py-2 rounded-lg relative cursor-pointer" onClick={() => {navigate(`/movie/${movie.id}`) }} key={movie.id}>
            <svg width="24" height="24" viewBox="0 0 24 24" onClick={() => onSvgClick(movie.id)} fill={movie.clicked ? "#562a5a" : "white"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-[20px] top-[10px] z-10" color="purple">
                <g>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </g>
            </svg>
            <img className='w-full max-w-[300px]' src={`${baseUrl}${movie.poster_path}`} alt={movie.original_title} />
            <div className='mt-4 ms-2 leading-tight font-semibold'>
                <div>{!series ? movie.original_title : movie.original_name}</div>
                <div>{!series ? movie.release_date : movie.first_air_date}</div>
            </div>
        </div>
    );
};

export default MovieCard;