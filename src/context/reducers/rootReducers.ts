import { combineReducers } from "redux";

import tvShows from "./tvShowsReducer";
import tvShowDetails from "./tvShowDetailsReducer";
import search from "./searchReducer";

const rootReducers = combineReducers({
  tvShows,
  tvShowDetails,
  search
});

export default rootReducers;
