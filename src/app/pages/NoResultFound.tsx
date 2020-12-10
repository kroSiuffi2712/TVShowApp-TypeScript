const NoResultFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <i className="fa fa-search fa-5x" aria-hidden="true"></i>
      <h4 className="mb-0">No Result Found</h4>
      <p>We did not find any TV Shows for your search.</p>
      <h6>Search Again</h6>
    </div>
  );
};
export default NoResultFound;
