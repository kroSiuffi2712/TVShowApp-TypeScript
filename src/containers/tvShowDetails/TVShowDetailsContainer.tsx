import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchTVShowsDetails,
  resetTVShowDetails
} from "../../context/actions/tvShowDetailsAction";
import Season from "./SeasonContainer";


const TVShowsDetailsContainer = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const dispatch = useDispatch();

    useEffect(() => {
    (async () => {
        await dispatch(fetchTVShowsDetails(Number(id)));
      })();  
      
      //Clean Up
      return () => { 
         dispatch(resetTVShowDetails());
      }
    }, [dispatch, id]);
  
  return <Season/>;
};
export default TVShowsDetailsContainer;
