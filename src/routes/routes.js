const staticServerUri = process.env.REACT_APP_PATH || "";
const routes = {
    home: staticServerUri+"/",
    logIn: staticServerUri+"/log-in",
    signUp: staticServerUri+"/sign-up",
    cart: staticServerUri+"/cart",
    productDetail: `${staticServerUri}/product/:id`,
    skeletonTest: `${staticServerUri}/skeleton-test`,
    order:`${staticServerUri}/order`,
    orderComplete:staticServerUri+'/orders/complete',
    productDetail: `${staticServerUri}/product/:id`,
    skeletonTest: `${staticServerUri}/skeleton-test`
};

export default routes;