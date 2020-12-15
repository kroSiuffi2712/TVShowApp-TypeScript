import React from "react";
import { Route } from "react-router-dom";

import TVShows from "../containers/tvShows/TVShowsContainer";
import TVShowDetails from "../containers/tvShowDetails/TVShowDetailsContainer";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={TVShows} />
      <Route exact path="/tvShow/:id" component={TVShowDetails} />
    </div>
  );
};
export default Router;