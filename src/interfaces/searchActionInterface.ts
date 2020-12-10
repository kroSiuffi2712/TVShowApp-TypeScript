import { Search } from "./searchInterface";
import { ADD_VALUE_TO_SEARCH, RESET_SEARCH } from "../constans/index";

interface AddValueToSearch { 
    type: typeof ADD_VALUE_TO_SEARCH;
    payload: Search;
}

interface ResetSearch { 
    type: typeof RESET_SEARCH;
}

export type SearchAction = AddValueToSearch | ResetSearch;