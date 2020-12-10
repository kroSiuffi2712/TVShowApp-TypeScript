import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux"

import { fetchTVShows } from "../context/actions/tvShowsActions";
import { fetchTVShowsDetails } from "../context/actions/tvShowDetailsAction";


const TVShows: FC = () => { 
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(fetchTVShows("game"));
        dispatch(fetchTVShowsDetails("1399"))
    },[dispatch])

    return (<div>
        Hola
    </div>)
}

export default TVShows;


