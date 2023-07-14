const SkeletonCard = () => {
  return (
    <div className="border-0">
      <div className="animate-pulse space-y-2">
        <div className="bg-gray-200 h-[305px] h-[305px] rounded-[8px]" />
        <div className="flex-1">
          <div className="h-[17px] mt-[9px] bg-gray-200 full" />
          <div className="h-[27px] mt-[7px] bg-gray-200 w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
