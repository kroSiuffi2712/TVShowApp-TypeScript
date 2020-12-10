import PulseLoader from "react-spinners/PulseLoader";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <PulseLoader color={"#363430"} loading={true} />
    </div>
  );
};
export default Loading;