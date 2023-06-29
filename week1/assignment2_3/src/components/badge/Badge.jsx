const Badge = ({ text, color = "teal", fontSize = 10 }) => {
  return (
    <b
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
    </b>
  );
};
export default Badge;
