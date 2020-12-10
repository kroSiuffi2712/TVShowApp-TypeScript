import { FC} from "react";

interface Props { 
    path: string;
    name: string;
}

const ImageSeasonContainer:FC<Props> = (props) => {
  const { path, name } = props;
  return (
    <div className="card-image d-flex flex-column">
      <img className="d-flex rounded" src={path} alt="" />
      <div className="title d-flex justify-content-center">
        <h3 className="align-self-center">{name}</h3>
      </div>
    </div>
  );
};
export default ImageSeasonContainer;