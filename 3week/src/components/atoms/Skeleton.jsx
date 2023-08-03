const Skeleton = () => {
  return (
    <div className="product-information-column skeleton">
      <div className="col">
        <div className="photo-skeleton" />
      </div>
      <div className="col">
        <div className="name-skeleton" />
        <div className="price-skeleton" />
      </div>
    </div>
  );
};

export default Skeleton;
