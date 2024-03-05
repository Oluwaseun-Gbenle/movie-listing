import axios from 'axios';

const fetchedMovieList = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default fetchedMovieList;