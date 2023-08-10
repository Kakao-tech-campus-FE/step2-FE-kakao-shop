const staticServerUri = process.env.REACT_APP_PATH || "";
const routes = {
    home: staticServerUri+"/",
    logIn: staticServerUri+"/log-in",
    signUp: staticServerUri+"/sign-up",
    cart: staticServerUri+"/cart",
    productDetail: `${staticServerUri}/product/:id`,
    skeletonTest: `${staticServerUri}/skeleton-test`,
    order:`${staticServerUri}/order`,
    orderComplete:staticServerUri+'/orders/complete/:id',
    productDetail: `${staticServerUri}/product/:id`,
    skeletonTest: `${staticServerUri}/skeleton-test`,
	orderSuccess:staticServerUri+'/orders/complete/:id',
};

export default routes;