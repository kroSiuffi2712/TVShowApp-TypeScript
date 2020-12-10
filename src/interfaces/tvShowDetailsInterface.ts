export interface TVShowDetails { 
    id: number;
    name: string;
    poster_path: string;
    seasons: Season[];
}

export interface TVShowDetailsSeason { 
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

export interface Season { 
    _id: string;
    air_date: string;
    episodes: Episode[];
    name: string;
    overview: string;
    id: number;
    poster_path: string;
    season_number: number;
    episode_count: number;
}

export interface Episode { 
    air_date: string;
    episode_number: number;
    crew: Crew[];
    guest_stars: GuestStars[];
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface Crew { 
    department: string;
    job: string;
    credit_id: string;
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
}

export interface GuestStars { 
    character: string;
    credit_id: string;
    order: number;
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
}

export interface tvShowDetailsState { 
    loading: boolean;
    data: TVShowDetails | null;
    error: string;
}
