import Badge from "./Badge";

const BadgeGroup = () => {
  return (
    <div>
      <div style={{ margin: "8px" }}>
        <span style={{ fontSize: "1rem" }}>Badge component</span>
        <Badge text={"New!"} color={"purple"} />
      </div>
      <div style={{ margin: "8px" }}>
        <span style={{ fontSize: "1.2rem" }}>Badge component</span>
        <Badge text={"Hot!"} color={"orange"} fontSize={12} />
      </div>
      <div style={{ margin: "8px" }}>
        <span style={{ fontSize: "1.4rem" }}>Badge component</span>
        <Badge text={"WARNING"} color={"red"} fontSize={14} />
      </div>
      <div style={{ margin: "8px" }}>
        <span style={{ fontSize: "1.6rem" }}>Badge component</span>
        <Badge text={"Great!"} color={"green"} fontSize={16} />
      </div>
      <div style={{ margin: "8px" }}>
        <span style={{ fontSize: "1.8rem" }}>Badge component</span>
        <Badge text={"Excellent!"} color={"blue"} fontSize={18} />
      </div>
    </div>
  );
};
export default BadgeGroup;
