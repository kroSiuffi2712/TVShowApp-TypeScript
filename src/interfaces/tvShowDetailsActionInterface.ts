import { TVShowDetails } from "./tvShowDetailsInterface";
import { FETCH_TVSHOW_DETAILS_REQUEST, FETCH_TVSHOW_DETAILS_SUCCESS, FETCH_TVSHOW_DETAILS_FAILURE, RESET_TVSHOW_DETAILS } from "../constans/index";

interface tvShowDetailsRequestAction  { 
    type: typeof FETCH_TVSHOW_DETAILS_REQUEST;
}

interface tvShowDetailsSuccessAction { 
    type: typeof FETCH_TVSHOW_DETAILS_SUCCESS;
    payload: TVShowDetails;
}

interface tvShowDetailsFailure  { 
    type: typeof FETCH_TVSHOW_DETAILS_FAILURE;
    payload: string;
}

interface resetTVShowDetails { 
    type: typeof RESET_TVSHOW_DETAILS
}


export type tvShowDetailsAction = tvShowDetailsRequestAction | tvShowDetailsSuccessAction | tvShowDetailsFailure | resetTVShowDetails;