import Badge from "./Badge";

const BadgeGroup = () => {
  return (
    <div>
      <div style={{ margin: "8px" }}>
        <span>Badge component</span>
        <Badge text={"New!"} color={"purple"} />
      </div>
      <div style={{ margin: "8px" }}>
        <span>Badge component</span>
        <Badge text={"Hot!"} color={"orange"} />
      </div>
      <div style={{ margin: "8px" }}>
        <span>Badge component</span>
        <Badge text={"WARNING"} color={"red"} />
      </div>
      <div style={{ margin: "8px" }}>
        <span>Badge component</span>
        <Badge text={"Great!"} color={"green"} />
      </div>
      <div style={{ margin: "8px" }}>
        <span>Badge component</span>
        <Badge text={"Excellent!"} color={"blue"} />
      </div>
    </div>
  );
};
export default BadgeGroup;
