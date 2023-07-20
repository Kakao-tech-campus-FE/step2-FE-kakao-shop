const SkeletonElement = ({ type, className }) => {
  const typeToClassMap = {
    title: 'skeleton-title h-5',
    text: 'skeleton-text h-4',
    thumbnail: 'skeleton-thumbnail w-inherit h-60 border-radius-10',
    price: 'skeleton-price h-6 w-1/2',
    icon: 'skeleton-icon h-6 w-6',
  };

  return (
    <div className={`skeleton animate-pulse bg-slate-200 rounded ${typeToClassMap[type] ?? ''} ${className}`}></div>
  );
};

export default SkeletonElement;
