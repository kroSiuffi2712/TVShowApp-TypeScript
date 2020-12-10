import { useState, useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { isEmptyObject } from "jquery";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { addValueToSearch } from "../context/actions/searchAction";

interface Props { 
  divStyle: string;
}

const Search:FC<Props> = (props) => {
  const { divStyle } = props;
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    //this dispatch is only used to load the page with initial data
    //showing the tvShows that start with the letter A.
    dispatch(addValueToSearch("A"));
  }, [dispatch]);

  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      {errors.search ? errors.search.message : ""}
    </Tooltip>
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = async () => {
    setShow(!show);
  };

  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && isEmptyObject(errors.search)) {
      dispatch(addValueToSearch((event.target as HTMLInputElement).value));
    }
  };

  return (
    <div className={`${divStyle} d-flex flex-row`}>
      <div className="input-group">
        {show ? (
          <OverlayTrigger
            show={errors.search ? true : false}
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <input
              id="search"
              name="search"
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="search"
              aria-describedby="basic-addon2"
              value={value}
              onChange={handleChange}
              onKeyDown={keyPress}
              ref={register({
                pattern: {
                  value: /^[A-Za-z0-9]+$/g,
                  message: "special characters are not allowed",
                },
              })}
            />
          </OverlayTrigger>
        ) : (
          <div></div>
        )}
      </div>
      <button
        type="button"
        className="btn-search"
        data-toggle="popover"
        data-container="body"
        data-placement="bottom"
        title="Search"
        data-content="And here's some amazing content. It's very engaging. Right?"
        onClick={handleSubmit(onSubmit)}
      >
        <i className="fa fa-search fa-2x ml-1" aria-hidden="true"></i>
      </button>
    </div>
  );
};
export default Search;