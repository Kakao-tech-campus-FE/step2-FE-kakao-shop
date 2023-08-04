import { React, useEffect, useState } from 'react';

import routes from '../../routes/routes'

import { useNavigate } from 'react-router-dom';
import HeaderList from '../atoms/HeaderList';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    height: 4rem;

    width: 993px;

    border-bottom: 1px solid #dbdbdbb6;

    display: flex;
    align-items:end;
    justify-content: end;

`

const Header = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    useEffect((e) => {
        if (localStorage.getItem('token'))
            setIsLogin(true);
    }, [isLogin]);


    return (
        <>
            <h1  className="text-3xl font-bold my-8 text-kakao"  onClick={() => { navigate(routes.home); }}>Kakao</h1>
            <div onClick={() => { navigate(routes.cart); }}>장바구니</div>
            <HeaderStyle>
                {isLogin ? < HeaderList name="로그아웃" slash={false}
                    onClick={() => {
                        localStorage.removeItem('token')
                        setIsLoginT(false)
                    }

                    }></ HeaderList > : <>
                    < HeaderList name="로그인" slash={true} onClick={()=>navigate(routes.logIn)}></HeaderList>
                    <HeaderList name="회원가입" slash={false} onClick={ ()=>navigate(routes.signUp)}></HeaderList>
                </>}
            </HeaderStyle></>

    );
};

export default Header;