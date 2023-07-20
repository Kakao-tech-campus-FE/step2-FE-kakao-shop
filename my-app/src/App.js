import AppRoutes from "./routes/route";

function App() {
  const style = {
    margin: "30px auto",
    padding: "10px 10px",
    backgroundColor: "white",
    width: "80vw",
  };
  return (
    <div style={style}>
      <AppRoutes />
    </div>
  );
}

export default App;
