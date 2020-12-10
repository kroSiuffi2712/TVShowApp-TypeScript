import { ADD_VALUE_TO_SEARCH, RESET_SEARCH } from "../../constans/index";
import { SearchState } from "../../interfaces/searchInterface";
import { SearchAction} from "../../interfaces/searchActionInterface"

const initalState:SearchState = {
  data: null,
};

const searchReducer = (state = initalState, action:SearchAction):SearchState => {
  switch (action.type) {
    case ADD_VALUE_TO_SEARCH:
      return {
        data: action.payload,
      };
    case RESET_SEARCH:
      return initalState;
    default:
      return state;
  }
};

export default searchReducer;