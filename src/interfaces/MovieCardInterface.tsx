import { MovieInterface } from "./MovieInterface";

export interface MovieCardInterface {
    series:boolean;
    movie: MovieInterface;
    movies: MovieInterface[];
    setMovies: (movies: MovieInterface[]) => void;
}
