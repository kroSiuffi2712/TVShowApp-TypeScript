import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchTVShowsDetails
} from "../context/actions/tvShowDetailsAction";
import Season from "./SeasonContainer";


const TVShowsDetailsContainer = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const dispatch = useDispatch();

    useEffect(() => {
    (async () => {
        await dispatch(fetchTVShowsDetails(Number(id)));
    })();
  }, [dispatch, id]);


  return <Season/>;
};
export default TVShowsDetailsContainer;
