import React from 'react';
import MainProductTemplate from '../components/templates/MainProductTemplate';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Main = () => {
    const email = useSelector((state) => state.user.email);
    const token = useSelector((state) => state.user.token);

    const logEmail = () => { console.log(email) }
    const logToken = () => { console.log(token) }

    return (
        <>
            <div className='mainPage'>
                <MainProductTemplate/>
                메인 홈페이지입니다.
                <br></br>
                <button onClick={logEmail}>이메일 있나?</button>
                <button onClick={logToken}>토큰 있나?</button>
            </div>
        </>
    );
};

export default Main;