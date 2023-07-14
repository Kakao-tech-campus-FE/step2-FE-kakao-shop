const Loader = () => {
    return (
      <div className="loader-box">
        <div className="lable">Loading...</div>
        <div className="loader">
          <div className="element-animation">
            <img
              src="../../src/clock_loader_90_FILL0_wght400_GRAD0_opsz48.png"
              width="300"
              height="300"
              alt="loader"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Loader;