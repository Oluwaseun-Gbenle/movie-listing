const API_KEY= import.meta.env.VITE_API_KEY;
const request= {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchPopularMovies: `movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchPopularSeries: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchSingleMovie: `api_key=${API_KEY}`,
    searchMovies:  `search/movie?api_key=${API_KEY}`,
    searchSeries:`search/tv?api_key=${API_KEY}`
}

export default request;