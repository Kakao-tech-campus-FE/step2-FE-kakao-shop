import { Provider } from "react-redux";
import LoginForm from "../components_2/organisms/LoginForm";

const LoginPage = () => {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
};

export default LoginPage;
