import Card from "../atoms/Card";

const SkeletonCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`} className="rounded-md bg-gray-200 p-4">
      <div className="mb-4 h-48 w-full rounded-md bg-gray-300"></div>
      <h3 className="mb-2 h-6 w-3/4 bg-gray-300"></h3>
      <p className="h-4 w-1/2 bg-gray-300"></p>
    </Card>
  );
};

export default SkeletonCard;
