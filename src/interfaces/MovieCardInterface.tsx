import { MovieInterface } from "./MovieInterface";

export interface MovieCardInterface {
    movie: MovieInterface;
    movies: MovieInterface[];
    setMovies: (movies: MovieInterface[]) => void;
}
