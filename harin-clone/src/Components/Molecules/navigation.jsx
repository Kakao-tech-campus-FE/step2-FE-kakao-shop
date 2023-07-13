import { Link, Outlet } from 'react-router-dom';
import Button from '../Atoms/button';
import userSlice, { delEmail } from '../../Store/Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navigation = () => {
  const styleButton = "rounded-lg bg-yellow-200 p-3 m-3"
  const dispatch = useDispatch()
  const email = useSelector((state => state.user.email))

  return (
    <>
      <header>
        <div className='text-3xl text-center m-3 p-3'>clone_Kakao</div>
        <div className='flex justify-center mt-12'>
          <div><Link to='/mainpage' className={styleButton}>Main</Link></div>
          { email ? null : <div><Link to='/loginpage' className={styleButton}>Login</Link></div> }
          <div><Link to='/registerpage' className={styleButton}>Register</Link></div>
        </div>
        <div>
          { email ? <div>{email}</div> : null }
          { email ? <Button onClick={dispatch(delEmail())} >로그아웃</Button> : null}
        </div>
      </header>
      <Outlet />
    </>


  )

}

export default Navigation