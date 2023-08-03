const CarouselItem = ({ item, width, onClick, cursor }) => {
  return (
    <div
      className="item"
      style={{ width: width, backgroundColor: item.bgColor, cursor: cursor }}
      onClick={onClick}
    >
      <div className="item-slide">
        <span className="title">{item.title}</span>
        <br />
        <span className="description">{item.description}</span>
      </div>
    </div>
  );
};

export default CarouselItem;
