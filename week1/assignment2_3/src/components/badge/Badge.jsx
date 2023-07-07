const Badge = ({ text, color = "teal", fontSize = 10 }) => {
  return (
    <b
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: `${fontSize * 0.7}px`,
        padding: `${fontSize * 0.2}px ${fontSize * 0.3}px`,
        margin: `${fontSize * 0.2}px`,
        fontSize: fontSize,
      }}
    >
      {text}
    </b>
  );
};
export default Badge;
