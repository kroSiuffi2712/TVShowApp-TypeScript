const BadRequest = (props:any) => {
  const { message } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <i className="fa fa-exclamation-triangle fa-5x" aria-hidden="true"></i>
      <h4 className="mb-0">Unexpected Error</h4>
      <p>{message}</p>
      <h6>Try Again</h6>
    </div>
  );
};
export default BadRequest;
