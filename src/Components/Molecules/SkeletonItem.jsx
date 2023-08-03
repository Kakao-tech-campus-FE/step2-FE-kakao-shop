import "../../Styles/SkeletonItem.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../../Styles/ProductGrid.css";
import Container from "../Atoms/Container";
import Card from "../Atoms/Card";

const SkeletonItem = () => {
  return (
    <Container className="mt-12">
      <div className="skeleton-grid flex justify-center">
        <Card>
          <div className="rounded p-4 w-[15rem] h-[15rem] bg-stone-200 m-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-1/2"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-2/3"></div>
        </Card>
        <Card>
          <div className="rounded p-4 w-[15rem] h-[15rem] bg-stone-200 m-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-1/2"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-2/3"></div>
        </Card>
        <Card>
          <div className="rounded p-4 w-[15rem] h-[15rem] bg-stone-200 m-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-1/2"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-2/3"></div>
        </Card>
        <Card>
          <div className="rounded p-4 w-[15rem] h-[15rem] bg-stone-200 m-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-1/2"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-2/3"></div>
        </Card>
      </div>
      <div className="skeleton-grid flex justify-center">
        <Card>
          <div className="rounded p-4 w-[15rem] h-[15rem] bg-stone-200 m-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-1/2"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-2/3"></div>
        </Card>
        <Card>
          <div className="rounded p-4 w-[15rem] h-[15rem] bg-stone-200 m-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-1/2"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-2/3"></div>
        </Card>
        <Card>
          <div className="rounded p-4 w-[15rem] h-[15rem] bg-stone-200 m-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-1/2"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-2/3"></div>
        </Card>
        <Card>
          <div className="rounded p-4 w-[15rem] h-[15rem] bg-stone-200 m-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-1/2"></div>
          <div className="rounded p-2 bg-stone-100 m-3 h-3 w-2/3"></div>
        </Card>
      </div>
    </Container>
  );
};
export default SkeletonItem;
