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
    const [JWT, setJWT] = useState(null)
    useEffect((e) => {
        setJWT(localStorage.getItem('jwt'));
    }, [JWT]);


    return (

        <>
            <h1 onClick={() => { navigate(routes.home); }}>Kakao</h1>
            <HeaderStyle>
                {JWT ? < HeaderList name="로그아웃" slash={false}
                    onClick={() => {
                        localStorage.removeItem('jwt')
                        setJWT(null)
                    }

                    }></ HeaderList > : <>
                    < HeaderList name="로그인" slash={true} onClick={() => { navigate(routes.logIn); }}></ HeaderList >
                    <HeaderList name="회원가입" slash={false} onClick={() => { navigate(routes.signUp); }}></HeaderList>
                </>}
            </HeaderStyle></>


    );
};

export default Header;