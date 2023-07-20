const ProductCardSkeleton = () => {
  return (
    <div className="animate-[pulse_0.7s_ease-in-out_infinite] w-64 ">
      <div className="h-64 bg-neutral-300 border border-neutral-200 rounded-xl" />
      <div className="mt-2 h-4 bg-neutral-300 border border-neutral-200 rounded-md" />
      <div className="mt-1.5 h-4 w-2/5 bg-neutral-300 border border-neutral-200 rounded-md" />
      <div className="mt-2 h-6 w-1/2 bg-neutral-300 border border-neutral-200 rounded-md"></div>
      <div className="line  w75"></div>
    </div>
  );
};
export default ProductCardSkeleton;
