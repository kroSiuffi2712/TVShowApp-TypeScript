import { FC } from "react";
import { Link } from "react-router-dom";

interface Props { 
    divStyle: string;
    title: string;
    path: string;
}

const LinkButton:FC<Props> = (props) => {
  const { divStyle, title, path } = props;
  return (
    <div className={divStyle}>
      <Link className="btn link-button mt-2 mb-2" to={path}>
        {title}
      </Link>
    </div>
  );
};
export default LinkButton;