import "../../styles/atoms/Loader.css";

const Loader = () => {
  return (
    <div className="container">
      <div className="loader">
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--dot" />
        <div className="loader--text" />
      </div>
    </div>
  );
};

export default Loader;