interface Genres{
    id:number;
    name:string;
}

export interface MovieInterface {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[]
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    original_name: string;
    overview: string;
    popularity: number
    poster_path: string;
    release_date: string;
    first_air_date: string;
    genres:Genres[];
    runtime:number;
    tagline:string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    clicked: boolean;
}