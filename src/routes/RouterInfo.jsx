import Cart from '../pages/Cart';
import Home from '../pages/Home'
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import routes from './routes';
import ProductDetailPage from '../pages/ProductDetailPage';
import SkeletonPage from '../components/skeleton/SkeletonPage';
import OrderPage from '../pages/OrderPage';
import OrderCompletePage from '../pages/OrderCompletePage'
const staticServerUri = process.env.REACT_APP_PATH || "";
export const RouterInfo = [
    {
        path: `${staticServerUri}${routes.home}`,
        element: <Home />,
        children: [
            // {
            //     path: `logIn`,
            //     element: <Login></Login>,
            //     label: 'login'
            // }

        ]

    },
    {
        path: `${staticServerUri}${routes.logIn}`,
        element: <Login></Login>,
        label: 'login'
    },
    {
        path: `${staticServerUri}${routes.signUp}`,
        element: <SignUp />,
        label: 'signup'
    },
    {
        path: `${staticServerUri}${routes.cart}`,
        element: <Cart/>,
        label: 'cart'
    },
    {
        path: `${staticServerUri}${routes.productDetail}`,
        element: <ProductDetailPage />,
        label: 'productDetail'
    },
    {
        path: `${staticServerUri}${routes.skeletonTest}`,
        element: <SkeletonPage />,
        label: 'skeletonTest'
    },
    {
        path: `${staticServerUri}${routes.order}`,
        element: <OrderPage />,
        label: 'order'
    }, {
        path: `${staticServerUri}${routes.orderComplete}`,
        element: <OrderCompletePage/>,
        label: 'order'
    },
]