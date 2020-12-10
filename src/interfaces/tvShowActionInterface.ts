import { TVShowsResult } from "./tvShowInterface";
import { FETCH_TVSHOWS_REQUEST, FETCH_TVSHOWS_SUCCESS, FETCH_TVSHOWS_FAILURE, RESET_TVSHOWS_LIST } from "../constans/index";

interface tvShowRequestAction { 
    type: typeof FETCH_TVSHOWS_REQUEST;
}

interface tvShowsSuccessAction { 
    type: typeof FETCH_TVSHOWS_SUCCESS;
    payload: TVShowsResult[];
}

interface tvShowFailureAction { 
    type: typeof FETCH_TVSHOWS_FAILURE;
    payload: string;
}

interface resetTVShowsAction { 
    type: typeof RESET_TVSHOWS_LIST
}


export type tvShowAction = tvShowRequestAction | tvShowsSuccessAction | tvShowFailureAction | resetTVShowsAction;