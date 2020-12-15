import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmptyObject } from "jquery";


import { fetchTVShows } from "../../context/actions/tvShowsActions";
import { RootState} from "../../store/store"

import TVShowsCard from "./TVShowsCardContainer";
import Loading from "../../app/pages/Loading";

const TVShowsContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector((state:RootState) => state.search);

  useEffect(() => {
    (async () => {
      if (search.data)
        await dispatch(fetchTVShows(search.data));
    })();
  }, [dispatch, search.data]);


  return !isEmptyObject(search.data) ? <TVShowsCard /> : <Loading />;
};

export default TVShowsContainer;
