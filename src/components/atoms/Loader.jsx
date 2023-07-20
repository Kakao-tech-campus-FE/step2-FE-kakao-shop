import "../../styles/atoms/Loader.css";
const Loader = () => {
  return (
    <div className="loader-box">
      <div className="lable">Loading</div>
      <div className="loader">
        <div className="element-animation">
          <img
            src="https://png.pngtree.com/png-vector/20200224/ourmid/pngtree-colorful-loading-icon-png-image_2152960.jpg"
            width="1180"
            height="70"
            alt="loader"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
