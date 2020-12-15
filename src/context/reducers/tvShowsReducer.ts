import { tvShowState } from "../../interfaces/tvShowInterface";
import { tvShowAction} from "../../interfaces/tvShowActionInterface"
import {FETCH_TVSHOWS_REQUEST, FETCH_TVSHOWS_SUCCESS, FETCH_TVSHOWS_FAILURE, RESET_TVSHOWS_LIST } from "../../constans/index"

const initialState : tvShowState = {
  loading: false,
  data: { result: [], total_results: null},
  error: "",
};

const tvShowsReducer = (state = initialState, action:tvShowAction): tvShowState => {
  switch (action.type) {
      case FETCH_TVSHOWS_REQUEST:
          return {
              ...state,
              loading: true,
      };
    case FETCH_TVSHOWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_TVSHOWS_FAILURE:
      return {
          ...state,
          loading:false,
          error:action.payload
      };
    case RESET_TVSHOWS_LIST:
      return initialState;
    default:
      return state;
  }
};

export default tvShowsReducer;