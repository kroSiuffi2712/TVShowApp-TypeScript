import { ThunkAction } from "redux-thunk";
import { ActionCreator, Dispatch } from "redux";

import axiosInstance from "../../helpers/axiosInstance";
import { RootState } from "../../store/store"
import {FETCH_TVSHOWS_REQUEST, FETCH_TVSHOWS_SUCCESS, FETCH_TVSHOWS_FAILURE } from "../../constans/index";
import { TVShows, Results, Credits, TVShowsResult } from "../../interfaces/tvShowInterface";
import { tvShowAction } from "../../interfaces/tvShowActionInterface";
import { mergeArrayObjectsById} from "../../helpers/arrayFunctions"

export const fetchTVShowsRequest = ()  => {
  return {
    type: FETCH_TVSHOWS_REQUEST,
  };
};

export const fetchTVShowsSuccess = (tvShows:TVShowsResult[]) => {
  return {
    type: FETCH_TVSHOWS_SUCCESS,
    payload: tvShows,
  };
};

export const fetchTVShowsFailure = (error:string) => {
  return {
    type: FETCH_TVSHOWS_FAILURE,
    payload: error,
  };
};


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
          const mergeArrays:TVShowsResult[] = mergeArrayObjectsById(credits, results);
          dispatch(fetchTVShowsSuccess(mergeArrays));
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTVShowsFailure(errorMsg));
      });
  };
};
