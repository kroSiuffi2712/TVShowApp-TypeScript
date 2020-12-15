import { ThunkAction } from "redux-thunk";
import { ActionCreator, Dispatch } from "redux";

import axiosInstance from "../../helpers/axiosInstance";
import { RootState } from "../../store/store"
import {FETCH_TVSHOWS_REQUEST, FETCH_TVSHOWS_SUCCESS, FETCH_TVSHOWS_FAILURE, RESET_TVSHOWS_LIST } from "../../constans/index";
import { TVShows, Results, Credits, TVShowsResult,TVShowData } from "../../interfaces/tvShowInterface";
import { tvShowAction } from "../../interfaces/tvShowActionInterface";
import { mergeArrayObjectsById} from "../../helpers/arrayFunctions"

export const fetchTVShowsRequest = ()  => {
  return {
    type: FETCH_TVSHOWS_REQUEST,
  };
};

export const fetchTVShowsSuccess = (tvShow:TVShowData) => {
  return {
    type: FETCH_TVSHOWS_SUCCESS,
    payload: tvShow,
  };
};

export const fetchTVShowsFailure = (error:string) => {
  return {
    type: FETCH_TVSHOWS_FAILURE,
    payload: error,
  };
};

export const resetTVShows = () => { 
  return {
    type: RESET_TVSHOWS_LIST
  }
}


export const fetchTVShows: ActionCreator<ThunkAction<void, RootState, null, tvShowAction>> = (value:string) => {
  return async (dispatch:Dispatch) => {
    const path = "/search/tv?query=" + value;
    dispatch(fetchTVShowsRequest());
    await axiosInstance
      .get(path)
      .then((response) => {
        const data: TVShows = response.data;
        const promises = data.results.map(async (item) => {
          return await axiosInstance
            .get(`/tv/${item.id}/credits`)
            .then((res) => res.data);
        });
        Promise.all(promises).then((response) => {
          const results: Results[] = data.results
          const credits: Credits[] = response;
          const mergeArrays: TVShowsResult[] = mergeArrayObjectsById(credits, results);
          const tvShowData: TVShowData = {result:mergeArrays, total_results:data.total_results}
          dispatch(fetchTVShowsSuccess(tvShowData));
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTVShowsFailure(errorMsg));
      });
  };
};

export const resetTVShowList = () => { 
  return (dispatch: Dispatch) => { 
    dispatch(resetTVShows());
  }
}
