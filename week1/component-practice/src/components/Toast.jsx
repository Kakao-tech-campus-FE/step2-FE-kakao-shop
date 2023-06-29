import "../styles/Toast.css";

export default function Toast({ message, type }) {
  const colorObj = {
    success: { borderLeft: "5px solid #35D448" },
    error: { borderLeft: "5px solid #D43535" },
    warning: { borderLeft: "5px solid #D4C135" },
    info: { borderLeft: "5px solid black" },
  };

  return (
    <div className="toast" style={colorObj[type]}>
      {message}
    </div>
  );
}
