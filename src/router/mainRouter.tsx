import {useRoutes} from 'react-router-dom'
import ComponentTest from '../pages/ComponentTest'

const mainRouter = () => {
    useRoutes([
        {
            path:'/',
            element:<ComponentTest/>,
        }
    ])

}