const Skeleton = () => {
    return (
      <div className="Skeleton-box">
        <div className="lable">Loading...</div>
        <div className="Skeleton">
          <div className="element-animation">
            <img
              src="../../src/clock_Skeleton_90_FILL0_wght400_GRAD0_opsz48.png"
              width="300"
              height="300"
              alt="Skeleton"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Skeleton;