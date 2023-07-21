import { Provider } from "react-redux";
import LoginForm from "../components_2/organisms/LoginForm";
import store from '../store';

const LoginPage = () => {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
};

export default LoginPage;
