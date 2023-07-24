import Card from '../components/atoms/Card';
import Home from '../pages/Home'
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import routes from './routes';
import ProductDetailPage from '../pages/ProductDetailPage';
<<<<<<< HEAD
<<<<<<< HEAD
import SkeletonPage from '../components/skeleton/SkeletonPage';
=======
>>>>>>> b3e9a4d9d (feat-AddStore)
=======
import SkeletonPage from '../components/skeleton/SkeletonPage';
>>>>>>> 02ab4daca (feat:Add skeleton)

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
<<<<<<< HEAD
<<<<<<< HEAD
        ]
=======
        ]// 이상하게 children에 넣으면 작동되지 않습니다ㅜㅜ
>>>>>>> b3e9a4d9d (feat-AddStore)
=======
        ]
>>>>>>> b72feaaa2 (feat:Add loader)
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
        element: <Card />,
        label: 'cart'
    },
    {
        path: `${routes.productDetail}`,
        element: <ProductDetailPage />,
        label: 'cart'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 02ab4daca (feat:Add skeleton)
    },
    {
        path: `${routes.skeletonTest}`,
        element: <SkeletonPage />,
        label: 'cart'
<<<<<<< HEAD
=======
>>>>>>> b3e9a4d9d (feat-AddStore)
=======
>>>>>>> 02ab4daca (feat:Add skeleton)
    }
]