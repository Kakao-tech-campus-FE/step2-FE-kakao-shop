import { useState } from 'react';
import styled from 'styled-components';

export const Toggle = () => {
  const [On, setOn] = useState(false);
  const Handle = () => {setOn(!On)};

  return (
    <>
      <Container onClick={Handle}>
        <div className={`toggle-not-checked ${On ? "toggle--checked" : null}`}/>
        <div className={`toggle-circle ${On ? "toggle--checked" : null}`}/>
      </Container>
      {On === false ? <Desc><div className='OFF'></div></Desc> : <Desc><div className='ON'></div></Desc>}
    </>
  );
};

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  cursor: pointer;

  > .toggle-not-checked {
    width: 50px;
    height: 25px;
    border-radius: 30px;
    background-color: gray
  }
  > .toggle--checked {
    background-color: green;
    transition : 0.3s
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: whitesmoke;
    transition : 0.5s
  } >.toggle--checked {
    left: 30px;
    transition : 0.5s
  }
`;

const Desc = styled.div`
  margin: 20px;
`;
