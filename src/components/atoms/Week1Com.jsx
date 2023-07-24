import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import routes from "../../routes";


const Week1Com = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>1 주차 과제 보러가기</h1>

            <button onClick={() => { navigate(routes.week1); }}>
                1주차 과제
            </button>
        </div>



    );
};

export default Week1Com;