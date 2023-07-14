import Container from "../atoms/Container";
import Skeleton from "../atoms/Skeleton";

const SkeletonProductCard = ({ className }) => {
    return (
        <Container className="w-full h-full" >
            <Skeleton className="w-[270px] h-[200px] text-lg" /> 
            <Skeleton className="w-full h-12 my-3 text-sm" /> 
            <Skeleton className="w-full h-12 text-lg" /> 
        </Container>
    );
  };
  
  export default SkeletonProductCard;