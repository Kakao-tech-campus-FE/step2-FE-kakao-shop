import React, {useState} from 'react'
import styled from 'styled-components';   

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 60px;
  height: 30px;
  background-color: lightgray;
  box-shadow: 0px 0px 5px rgb(199, 199, 199);
  border-radius: 50px;
  transition: all, 0.5s;
`

const Switch = styled.div`
  position: absolute;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  background-color: white;
  transition: all, 0.5s;
`

const Text = styled.div`

  font-size: 10px;
  margin: 5px;
`

const Toggle = () => {
    const [on, setOn] = useState(true);
    const toggle = () => {
        setOn(on ? false : true)
    }

    return (
        <Container>
            <Box onClick={toggle} style={ {backgroundColor: on ? 'skyblue' : null} }>
                <Switch onClick={toggle}  
                style={ {transform: `translateX(${on ? 0 : 30}px)`} }></Switch>
            </Box>
            <Text>{on ? 'on' : 'off'}</Text>
        </Container>
    )
}

export default Toggle