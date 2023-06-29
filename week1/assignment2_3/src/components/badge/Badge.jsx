const Badge = ({ text, color, fontSize = 10 }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: "8px",
        padding: "4.5px",
        margin: "3px",
        fontSize: fontSize,
      }}
    >
      {text}
    </span>
  );
};
export default Badge;
