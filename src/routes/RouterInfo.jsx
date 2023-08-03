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
        path: `${routes.home}`,
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
        path: `${routes.logIn}`,
        element: <Login></Login>,
        label: 'login'
    },
    {
        path: `${routes.signUp}`,
        element: <SignUp />,
        label: 'signup'
    },
    {
        path: `${routes.cart}`,
        element: <Cart/>,
        label: 'cart'
    },
    {
        path: `${routes.productDetail}`,
        element: <ProductDetailPage />,
        label: 'productDetail'
    },
    {
        path: `${routes.skeletonTest}`,
        element: <SkeletonPage />,
        label: 'skeletonTest'
    },
    {
        path: `${routes.order}`,
        element: <OrderPage />,
        label: 'order'
    }, {
        path: `${routes.orderComplete}`,
        element: <OrderCompletePage/>,
        label: 'order'
    },
]