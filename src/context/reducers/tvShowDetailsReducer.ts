import { tvShowDetailsAction} from "../../interfaces/tvShowDetailsActionInterface"
import { FETCH_TVSHOW_DETAILS_REQUEST, FETCH_TVSHOW_DETAILS_SUCCESS, FETCH_TVSHOW_DETAILS_FAILURE, RESET_TVSHOW_DETAILS } from "../../constans/index"
import { tvShowDetailsState } from "../../interfaces/tvShowDetailsInterface";

const initialState: tvShowDetailsState = {
  loading: false,
  data: null,
  error: "",
};

const tvShowDetails = (state = initialState, action:tvShowDetailsAction) :tvShowDetailsState => {
  switch (action.type) {
    case FETCH_TVSHOW_DETAILS_REQUEST:
          return {
          ...state,
        loading: true,
      };
    case FETCH_TVSHOW_DETAILS_SUCCESS:
      //delete the first position in the seasons.
      const tvShow = action.payload;
      const seasons = action.payload.seasons.filter(
        (s) => s.season_number !== 0
      );
      tvShow.seasons = seasons;
      //
      return {
        loading: false,
        data: tvShow,
        error: "",
      };
    case FETCH_TVSHOW_DETAILS_FAILURE:
          return {
          ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_TVSHOW_DETAILS:
      return initialState;
    default:
      return state;
  }
};
export default tvShowDetails;