import React from 'react';
import MainProductTemplate from '../components/templates/MainProductTemplate';
// import { useSelector } from 'react-redux/es/hooks/useSelector';

const Main = () => {
    // const email = useSelector((state) => state.user.email);
    // const token = useSelector((state) => state.user.token);

    // const logEmail = () => { console.log(email) }
    // const logToken = () => { console.log(token) }

    return (
        <div className='mainPage'>
            <MainProductTemplate/>
        </div>
    );
};

export default Main;