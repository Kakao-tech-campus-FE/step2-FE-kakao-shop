const Skeleton = ({ style }) => {
  const styleObj = {

  };
  
  return <div className={`bg-gray-400 my-4 rounded  ${styleObj[style]}`}></div>;
};

export default Skeleton;