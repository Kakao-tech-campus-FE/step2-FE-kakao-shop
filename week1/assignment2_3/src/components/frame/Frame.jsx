import "./Frame.css";
const Frame = ({ children, paddingVal = 40 }) => {
  return (
    <div className="frame" style={{ padding: `${paddingVal}px` }}>
      {children}
    </div>
  );
};
export default Frame;
