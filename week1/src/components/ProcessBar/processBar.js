import "../../styles/ProcessBar.scss";

const ProcessBar = ({ percentage }) => {
  return (
    <div>
      <div className="bar">
        <div className="process" style={{ width: percentage + "%" }}></div>
      </div>
      <div>{percentage}%</div>
    </div>
  );
};

export default ProcessBar;
