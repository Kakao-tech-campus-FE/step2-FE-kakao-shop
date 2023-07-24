import Cart from '../pages/Cart';
import Home from '../pages/Home'
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import routes from './routes';
import ProductDetailPage from '../pages/ProductDetailPage';

import SkeletonPage from '../components/skeleton/SkeletonPage';

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
    }
]