const ProductSkeleton = () => {
  return (
    <div className="h-full cursor-pointer flex flex-col min-h-[30rem] gap-2 animate-pulse">
      <div className="w-full flex-1 bg-slate-200"></div>
      <div className="w-12 h-4 rounded-md bg-slate-200"></div>
      <div className="w-full h-12 rounded-sm bg-slate-200"></div>
      <div className="w-40 h-8 rounded-sm bg-slate-200"></div>
    </div>
  );
};

export default ProductSkeleton;
