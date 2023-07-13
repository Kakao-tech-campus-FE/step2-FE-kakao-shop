/* eslint-disable */
import '../../styles/ProcessBar.scss';

const ProcessBar = ({ percentage }) => {
  return (
    <div className="processbar-wrapper">
      <div className="bar">
        <div className="process" style={{ width: percentage + '%' }}></div>
      </div>
      <label>{percentage}%</label>
    </div>
  );
};

export default ProcessBar;
