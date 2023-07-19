import MainSkeleton from "../molecules/MainSkeleton";
import Container from "../atoms/Container";

const MainProductsSkeleton = () => {
  return (
  <Container className="flex flex-col items-center justify-center">
    <Container className="flex flex-wrap w-240">
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
      <div className="w-60 m-10"><MainSkeleton /></div>
    </Container>
  </Container>
  )
}

export default MainProductsSkeleton;