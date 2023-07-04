import ComponentTest from "./pages/ComponentTest";
import mainRouter from "./router/mainRouter";

function App() {
  const routes = mainRouter();

  return <div>{routes}</div>;
}

export default App;
