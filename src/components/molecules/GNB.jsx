import { React, useEffect, useState } from 'react';
import routes from '../../routes/routes'
import { useNavigate } from 'react-router-dom';
import HeaderList from '../atoms/HeaderList';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import setToken from '../../store/slices/userSlice';

const staticServerUri = process.env.REACT_APP_PATH || "";
const GNB = () => {
    // const token = useSelector((state) => state.user.token);
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);
    useEffect((e) => {
        if (localStorage.getItem('token'))
            setIsLogin(true);
    }, []);

    //useSelector 안에 이메일이 존재하면 로그인됏음을 알수잇다.
    // 이 이메일값을 아래에 isLogin 대신 넣으면 됨.
    //useSelector 안되면 위에처럼 할 수 있는데 저거보다는 useSelector 이 더 좋음.

    //로컬에서 JWT 를 가져와서 로그인 되어 있는지 확인 후 각각의 글씨를 보여준다.
    return (
        <HeaderStyle>
            {isLogin ? < HeaderList name="로그아웃" slash={false}
                onClick={() => {
                    localStorage.removeItem('email')
                    localStorage.removeItem('token')
                    setIsLogin(false)
                    // dispatch(setToken(null));
                    alert('정상적으로 로그아웃 되었습니다.');
                }
                } /> : <>
                < HeaderList name="로그인" slash={true} onClick={() => { navigate(routes.logIn); }}></ HeaderList >
                <HeaderList name="회원가입" slash={false} onClick={() => { navigate(routes.signUp); }}></HeaderList>
            </>}
            <Link to={routes.cart}>
                <img src={`${staticServerUri}/cart.png`} alt='cart.png'></img>
            </Link>
        </HeaderStyle>
    );
};


const HeaderStyle = styled.header`
    height: 4rem;
    width: 992px;
    border-bottom: 1px solid #dbdbdbb6;

    display: flex;
    align-items:end;
    justify-content: end;

`

export default GNB;