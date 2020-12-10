export interface TVShows { 
    page: number;
    results: Results[];
    total_pages: number;
    total_results: number;
}

export interface TVShowsResult { 
    id: number;
    cast: Cast[];
    overview: string;
    poster_path: string;
    name: string;
    vote_average: number;
    vote_count: number; 
}

export interface Results {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Credits { 
    cast: Cast[];
    crew: Crew[];
    id: number;
}

export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    character: string;
    credit_id: string;
    order: number;
}

export interface Crew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}


export interface tvShowError { 
    cod: string;
    message: string;
}

export interface tvShowState { 
    loading: boolean;
    data: TVShowsResult[] | null;
    error: string;
}
