/**
 * 타입에 따라 다른 스켈레톤을 보여주는 컴포넌트
 * @param {'title' | 'text' | 'thumbnail' | 'price' | 'icon'} type 스켈레톤 타입
 * @param {string} className 스켈레톤에 적용할 클래스
 */
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
