import { AxiosInstance } from "axios";
import { MovieInterface } from "../interfaces/MovieInterface";

export async function fetchData(request: string, setMovies: (movies: MovieInterface[]) => void, fetchedMovieList: AxiosInstance, setIsLoading: (isLoading: boolean) => void): Promise<void> {
    setIsLoading(true);
    const req = await fetchedMovieList.get(request);
    const moviesWithClickedState = req.data.results.map((movie: MovieInterface) => ({
        ...movie,
        clicked: JSON.parse(localStorage.getItem('clickedMovies') || '{}')[movie.id] || false,
    }));
    setMovies(moviesWithClickedState);
    setIsLoading(false);
}