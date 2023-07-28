import CardSkeleton from "../atoms/CardSkeleton";

const SkeletonGroup = ({ arr }) => {
  return (
    <div>
      {arr.map((arr) => (
        <CardSkeleton />
      ))}
    </div>
  );
};

export default SkeletonGroup;
