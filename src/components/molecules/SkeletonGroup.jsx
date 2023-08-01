import CardSkeleton from "../atoms/CardSkeleton";

const SkeletonGroup = ({ arr }) => {
  return (
    <div>
      {arr.map((item, index) => (
        <CardSkeleton key={index} uniqueKey={index} />
      ))}
    </div>
  );
};

export default SkeletonGroup;
