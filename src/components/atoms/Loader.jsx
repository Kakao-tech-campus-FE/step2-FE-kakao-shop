import "../../styles/atoms/Loader.css";

const Loader = () => {
  return (
    <div id="wrapper">
      <div className="loader">
        <svg className="circular-loader" viewBox="25 25 50 50">
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};
export default Loader;
