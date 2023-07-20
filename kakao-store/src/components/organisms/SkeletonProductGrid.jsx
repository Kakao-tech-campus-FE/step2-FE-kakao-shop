import Container from "../atoms/Container";
import SkeletonProductCard from "../molecules/SkeletonProductCard";

const SkeletonProductGrid = () => {
    return (
        <Container className="grid w-full grid-cols-4 gap-4 px-10 my-4">
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
            <SkeletonProductCard />
        </Container>
    );
  };
  
  export default SkeletonProductGrid;