import "../../styles/molecules/CardSkeleton.css";

const CardSkeleton = () => {
  return (
    <>
      <div class="imageLoader"></div>
      <div class="nameLoader"></div>
      <div class="priceLoader"></div>
    </>
  );
};

export default CardSkeleton;
