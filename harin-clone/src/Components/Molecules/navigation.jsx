import { Link, Outlet } from 'react-router-dom'
import Button from '../Atoms/button'
import MainPage from '../../Pages/mainpage'
import LoginPage from '../../Pages/loginpage'
import RegisterPage from '../../Pages/registerpage'

const Navigation = () => {
  const styleButton = "rounded-lg bg-yellow-200 p-3 m-3"

  return (
    <>
      <header>
        <h1 className='text-3xl text-center m-3 p-3'>clone_Kakao</h1>
        <Link to='/mainpage' className={styleButton}>Main</Link>
        <Link to='/loginpage' className={styleButton}>Login</Link>
        <Link to='/registerpage' className={styleButton}>Register</Link>
      </header>
      <Outlet />
    </>


  )

}

export default Navigation