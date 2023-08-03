// codepen 참조
const Skeleton = () => {
  return (
    <div className="skeleton animate-pulse">
      <div className="bg-gray-300 rounded h-32 mb-4"></div>
      <div className="bg-gray-300 rounded h-4 w-2/3 mb-2"></div>
      <div className="bg-gray-300 rounded h-4 w-1/3"></div>
    </div>
  );
};

export default Skeleton;
