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
        <div className='text-3xl text-center m-3 p-3'>clone_Kakao</div>
        <div className='flex justify-center mt-12'>
          <div><Link to='/mainpage' className={styleButton}>Main</Link></div>
          <div><Link to='/loginpage' className={styleButton}>Login</Link></div>
          <div><Link to='/registerpage' className={styleButton}>Register</Link></div>
        </div>
      </header>
      <Link to='/week1' className={styleButton}>week1</Link>
      <Outlet />
    </>


  )

}

export default Navigation