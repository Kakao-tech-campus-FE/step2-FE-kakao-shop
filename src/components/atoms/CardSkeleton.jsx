const CardSkeleton = ({ uniqueKey }) => {
  return (
    <div
      key={uniqueKey}
      className="skeleton animate-pulse flex flex-col items-center justify-center"
    >
      <div className="bg-gray-300 rounded h-16 w-32 mb-4"></div>
      <div className="bg-gray-300 rounded h-3 w-40 mb-2"></div>
      <div className="bg-gray-300 rounded h-3 w-24"></div>
    </div>
  );
};

export default CardSkeleton;
