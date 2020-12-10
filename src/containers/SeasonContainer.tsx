import { useSelector } from "react-redux";
import { isEmptyObject } from "jquery";

import ImageContainer from "./ImageSeasonContainer";
import EpisodeContainer from "./EpisodeContainer";
import LinkButton from "../components/LinkButton";
import Loading from "../app/pages/Loading";

import { RootState} from "../store/store"

const { REACT_APP_IMAGE_PATH } = process.env;

const SeasonContainer = () => {
  const tvShow = useSelector((state:RootState) => state.tvShowDetails);

  if (isEmptyObject(tvShow.data)) return <Loading />;

  return (
    <div>
      <LinkButton divStyle="" path="/" title="Back" />
      <div className="card">
        <div className="card-body d-flex flex-row w-100">
          <ImageContainer
            path={
              isEmptyObject(tvShow!.data!.poster_path)
                ? ""
                : `${REACT_APP_IMAGE_PATH}${tvShow!.data!.poster_path}`
            }
            name={tvShow!.data!.name}
          />
          <EpisodeContainer
            seasons={tvShow!.data!.seasons}
          />
        </div>
      </div>
    </div>
  );
};
export default SeasonContainer;