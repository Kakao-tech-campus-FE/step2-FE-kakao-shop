import "../../Styles/Loader.css";

const Loader = () => {
  return (
    <svg
      version="1.1"
      className="loader"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 24"
      xmlSpace="preserve"
    >
      <circle stroke="none" cx="12" cy="12" r="12"></circle>
      <circle stroke="none" cx="50" cy="12" r="12"></circle>
      <circle stroke="none" cx="88" cy="12" r="12"></circle>
    </svg>
  );
};

export default Loader;
