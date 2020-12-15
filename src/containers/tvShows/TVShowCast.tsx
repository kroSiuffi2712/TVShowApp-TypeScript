import { FC } from "react";
import { isEmptyObject } from "jquery";

import { Cast } from "../../interfaces/tvShowInterface"

interface Props { 
  cast: Cast[];
}

const TVShowCast:FC<Props> = (props) => {
  const { cast } = props;

  if (isEmptyObject(cast)) return <div></div>;

  const firtsCast = cast.slice(0, 3);

  return (
    <div className="d-flex flex-column justify-content-center">
      <small className="mt-2 mb-2">Cast: </small>
      <div className="d-flex flex-column justify-content-center">
        {firtsCast.map((item) => (
          <small key={item.id}>{item.name}</small>
        ))}
      </div>
    </div>
  );
};
export default TVShowCast;