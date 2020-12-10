import React, { FC} from "react";
import { isEmptyObject } from "jquery";

interface Props { 
    array: any[];
    handleClick:any
}

const ToolBarButton:FC<Props> = (props) => {
  const { array, handleClick } = props;

  if (isEmptyObject(array)) return <div>Loading...</div>;

  return (
    <div
      className="btn-group mt-2 mb-3 align-self-center"
      role="group"
      aria-label="Basic example"
    >
      {array.map((item, index) => (
        <button
          key={`button-${index}`}
          type="button"
          className="btn btn-secondary ml-1"
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
export default ToolBarButton;
