const ProductSkeleton = () => {
  return (
    <div className="h-fit cursor-pointer flex flex-col gap-2 animate-pulse">
      <div className="w-full h-60 bg-slate-200"></div>
      <div className="w-12 h-4 rounded-md bg-slate-200"></div>
      <div className="w-full h-12 rounded-sm bg-slate-200"></div>
      <div className="w-40 h-8 rounded-sm bg-slate-200"></div>
    </div>
  );
};

export default ProductSkeleton;
