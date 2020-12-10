import { Dispatch} from "redux"
import { ADD_VALUE_TO_SEARCH, RESET_SEARCH } from "../../constans/index";

export const addValue = (value:string) => {
  return {
    type: ADD_VALUE_TO_SEARCH,
    payload: value,
  };
};

export const resetValue = () => {
  return {
    type: RESET_SEARCH,
  };
};

export const addValueToSearch = (value:string) => {
  return (dispatch:Dispatch) => {
    dispatch(addValue(value));
  };
};