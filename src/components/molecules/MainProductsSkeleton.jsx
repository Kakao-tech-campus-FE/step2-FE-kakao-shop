import MainSkeleton from "../atoms/MainSkeleton";

const MainProductsSkeleton = () => {
  return (
  <div className="flex flex-col items-center justify-center">
    <div className="flex flex-wrap w-240">
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
    </div>
  </div>
  )
}

export default MainProductsSkeleton;