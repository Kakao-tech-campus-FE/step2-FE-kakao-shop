import CardSkeleton from "../atoms/CardSkeleton";

const SkeletonGroup = ({ arr }) => {
  return (
    <div>
<<<<<<< HEAD
      {arr.map((item, index) => (
        <CardSkeleton key={index} uniqueKey={index} />
=======
      {arr.map((arr) => (
        <CardSkeleton />
>>>>>>> 003f6137052531724667909b8aee43a2ed641ab1
      ))}
    </div>
  );
};

export default SkeletonGroup;
