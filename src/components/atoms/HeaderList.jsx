import React from 'react';
import styled from 'styled-components';
const HeaderListStyle = styled.div`
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: 14px;

`

//홈화면에 로그인,회원가입 버튼을 보여주고, 로그인 시 로그아웃 버튼을 보여준다.
//name 은 들어갈 이름, onClick 은 클릭 시 들어갈 함수(navigate 가 들어간다.)
//slash는 로그인 하기 전에 true 값, 로그인 후 false 값이 들어간다.
const HeaderList = ({ name, onClick, slash }) => {
    return (<>


        <HeaderListStyle>
            <div onClick={()=>onClick()}>{name}</div>
        </HeaderListStyle>
        <HeaderListStyle>
            {slash ? '/' : ''}
        </HeaderListStyle>
    </>



    );
};

export default HeaderList;