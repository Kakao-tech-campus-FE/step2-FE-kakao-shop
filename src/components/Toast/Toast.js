/* eslint-disable */
import '../../styles/Toast.scss';

const Toast = ({ msg, show }) => {
  return show && <div className={`slide-top toast`}>{msg}</div>;
};

export default Toast;
