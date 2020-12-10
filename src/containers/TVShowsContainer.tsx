import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTVShows } from "../context/actions/tvShowsActions";
import { RootState} from "../store/store"

import TVShowsCard from "./TVShowsCard";

const TVShowsContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector((state:RootState) => state.search);

  useEffect(() => {
    (async () => {
        await dispatch(fetchTVShows(search.data));
    })();
  }, [dispatch, search.data]);

  return <TVShowsCard />;
};

export default TVShowsContainer;
