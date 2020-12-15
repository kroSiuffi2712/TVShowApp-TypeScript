import { useState, useEffect } from "react";
import { isEmptyObject } from "jquery";
import { useSelector } from "react-redux";

import { useWindowEvent } from "../helpers/useWindowEvent";

import { RootState } from "../store/store"
import { tvShowState,TVShowsResult } from "../interfaces/tvShowInterface"


export function useTVShowCard(): { tvShows: tvShowState, tvShowsPerPage: TVShowsResult[], offset: number, totalTvShows: number } {
  const tvShows = useSelector((state: RootState) => state.tvShows);
  const itemsPerPage = 9;
  const [offset, setOffset] = useState(itemsPerPage);
  
  const handleOnScroll = () => {
    if (!isEmptyObject(tvShows.data)) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          if (offset < tvShows.data.result.length) {
            setOffset(offset + itemsPerPage);
        }
      }
    }
  };


  //Register a window listener
  useWindowEvent("scroll", handleOnScroll);

   const resetValues = () => {
    setOffset(itemsPerPage);
  };

  useEffect(() => {
    if (!isEmptyObject(tvShows.data)) {
      resetValues();
    }
  }, [tvShows.data]);

    //tvShows per page.
    const tvShowsPerPage = tvShows.data.result.slice(0, offset);
    const totalTvShows = tvShows.data.result.length;
    
    return { tvShows, tvShowsPerPage, offset, totalTvShows }
  
}

