import AppRoutes from "./routes/route";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

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
