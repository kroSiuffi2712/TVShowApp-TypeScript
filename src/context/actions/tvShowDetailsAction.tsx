import { ThunkAction } from "redux-thunk";
import { ActionCreator, Dispatch } from "redux";
import axiosInstance from "../../helpers/axiosInstance";

import { RootState } from "../../store/store"
import { tvShowDetailsAction } from "../../interfaces/tvShowDetailsActionInterface";
import {FETCH_TVSHOW_DETAILS_REQUEST, FETCH_TVSHOW_DETAILS_SUCCESS, FETCH_TVSHOW_DETAILS_FAILURE, RESET_TVSHOW_DETAILS } from "../../constans/index";
import { mergeArrayObjectsById} from "../../helpers/arrayFunctions"
import { TVShowDetails } from "../../interfaces/tvShowDetailsInterface";

export const fetchTVShowDetailsRequest = () => {
  return {
    type: FETCH_TVSHOW_DETAILS_REQUEST,
  };
};

export const fetchTVShowDetailsSuccess = (tvShow:TVShowDetails) => {
  return {
    type: FETCH_TVSHOW_DETAILS_SUCCESS,
    payload: tvShow,
  };
};

export const fetchTVShowDetailsFailure = (error:string) => {
  return {
    type: FETCH_TVSHOW_DETAILS_FAILURE,
    payload: error,
  };
};

export const resetTVShow = () => {
  return {
    type: RESET_TVSHOW_DETAILS,
  };
};

export const fetchTVShowsDetails : ActionCreator<ThunkAction<void, RootState, null, tvShowDetailsAction>> =  (id:number) => {
  return async (dispatch:Dispatch) => {
    dispatch(fetchTVShowDetailsRequest());
    await axiosInstance
      .get(`/tv/${id}`)
      .then((response) => {
        const data = response.data;
        const tvShow:TVShowDetails = {
          id: data.id,
          name: data.name,
          poster_path: data.poster_path,
          seasons: data.seasons
        };
        const promises = tvShow.seasons.map(async (item) => {
          return await axiosInstance
            .get(
              `https://api.themoviedb.org/3/tv/${id}/season/${item.season_number}?api_key=b2907782d07859a652052d3bae537475`
            )
            .then((res) => res.data);
        });
        Promise.all(promises).then((response) => {
          const episodes = response;
          const seasonsWithEpisodes= mergeArrayObjectsById(
            episodes,
            tvShow.seasons
          );
          const tvShowDetails:TVShowDetails = {
            id: tvShow.id,
            name: tvShow.name,
            poster_path: tvShow.poster_path,
            seasons: seasonsWithEpisodes,
          };
          dispatch(fetchTVShowDetailsSuccess(tvShowDetails));
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTVShowDetailsFailure(errorMsg));
      });
  };
};

export const resetTVShowDetails = () => {
  return (dispatch:Dispatch) => {
    dispatch(resetTVShow());
  };
};