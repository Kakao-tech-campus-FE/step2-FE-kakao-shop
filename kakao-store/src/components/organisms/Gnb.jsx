import { useEffect, useState } from "react";
import Box from "../atoms/Box";
import Container from "../atoms/Container";
import { NavLink } from "react-router-dom";

const Gnb = () => {
    const {loginState, setLoginState} = useState(false);
    
    useEffect(() => {

    }, []);

    return (
        <Container className="border-b">
            <Container className="px-4 mx-auto max-w-7xl"> 
                <Container className="flex justify-between">
                    <Box className="flex items-center py-4">
                        <img src="/img/logoKakao.png" width="100px"/>
                    </Box>
                    <Box className="flex items-center space-x-4">
                        <NavLink to="/login"> 
                            로그인
                        </NavLink>
                        <NavLink to="/signup">
                            회원가입
                        </NavLink>
                    </Box>
                </Container>
            </Container>
        </Container>
    );
}

export default Gnb;