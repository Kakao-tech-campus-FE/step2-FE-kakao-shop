import "../../../styles/atoms/ProductCardSkeleton.css";

/**
 * ProductCardSkeleton Component: 코드펜에서 가져온 코드
 * @returns 프로덕트 카드의 스켈레톤 UI
 */
export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col items-start h-96 border-slate-200 border-solid p-5 w-64">
      <div className="card-img skeleton" />
      <div className="card-body">
        <div className=" card-title skeleton pt-5"></div>
        <div className=" card-intro skeleton pt-5"></div>
      </div>
    </div>
  );
}
