import { FC } from "react";
import EpisodeList from "./EpisodeListContainer";
import ToolBarButton from "../../components/ToolBarButton";
import { useState } from "react";

import {Season } from "../../interfaces/tvShowDetailsInterface"

interface Props { 
    seasons: Season[];
}

const EpisodeContainer:FC<Props> = (props) => {
  const { seasons } = props;
  const [seasonId, setSeason] = useState(1);

  const handleClick = (value:number) => {
    setSeason(value);
  };

  return (
    <div className="episodes-container d-flex flex-column ml-2 w-100 pl-5 pr-5 overflow-auto">
      <h2 className="card-title mb-2 align-self-center">
        <strong>SEASONS</strong>
      </h2>
      <ToolBarButton
        array={seasons}
        handleClick={handleClick}
      />
      <div className="">
        <EpisodeList seasonId={seasonId} />
      </div>
    </div>
  );
};
export default EpisodeContainer;