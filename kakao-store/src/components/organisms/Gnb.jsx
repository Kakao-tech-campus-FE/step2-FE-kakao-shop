import { useEffect, useState } from "react";
import Box from "../atoms/Box";
import Container from "../atoms/Container";
import { NavLink } from "react-router-dom";
import Button from "../atoms/Button";

const Gnb = () => {
    const [loginState, setLoginState] = useState(false);
    
    useEffect(() => {
        const currentTime = new Date().getTime();
        const previousTime = localStorage.getItem('Time');

        if(currentTime - previousTime < 1000 * 60 * 60 * 24) {
            setLoginState(true);
        }
        else {
            localStorage.removeItem('token');
            localStorage.removeItem('Time');
            setLoginState(false);
        }
    }, []);

    return (
        <Container className="border-b">
            <Container className="px-4 mx-auto max-w-7xl"> 
                <Container className="flex justify-between">
                    <Box className="flex items-center py-4">
                        <img src="/img/logoKakao.png" width="100px"/>
                    </Box>
                    <Box className="flex items-center space-x-4">
                        {loginState === false &&
                            <NavLink to="/login"> 
                                로그인
                            </NavLink>
                        }
                        {loginState === true &&
                            <Button onClick={() => {
                                localStorage.removeItem('Time');
                                localStorage.removeItem('token');
                                alert('로그아웃 되었습니다.');
                                window.location.href = '/';
                            }}>
                                로그아웃
                            </Button>
                        }
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