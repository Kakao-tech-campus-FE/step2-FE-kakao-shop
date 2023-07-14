import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const SkeletonCard = () => {
  return (
    <Card>
      <Photo src={"https://picsum.photos/750/750?grayscale"} alt={"loading"} />
      <h3>Loading...</h3>
    </Card>
  );
};

export default SkeletonCard;
