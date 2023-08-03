const staticServerUri = import.meta.env.REACT_APP_PATH || "";

const routes = {
  home: staticServerUri + "/",
  signIn: staticServerUri + "/sign-in",
  signUp: staticServerUri + "/sign-up",
  product: staticServerUri + "/product",
  cart: staticServerUri + "/cart",
  order: staticServerUri + "/order",
  orderResult: staticServerUri + "/order-result",
};

export default routes;
