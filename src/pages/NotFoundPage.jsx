import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Box from "../components/atoms/Box";

const NotFoundPage = () => {
    return (
        <div className="bg-bg_gray">
            <Container className="w-[870px] bg-white border border-border_gray">
                <Box className="title_wrap text-center text-[40px] bg-white border border-border_gray py-[40px]">
                    <h1 className="font-semibold">404 Not Found</h1>
                </Box>
                <Box className="text-center bg-white border border-border_gray pt-[100px] pb-[400px]">
                    <span className="block py-[14px] leading-5 text-lg">
                        페이지가 존재하지 않습니다.
                    </span>
                    <div className="w-[400px] mx-auto">
                        <Button
                            className={styles.home_btn}
                            onClick={() => { window.location.href = "/"; }}
                            >
                            카카오 쇼핑하기 홈으로 이동
                        </Button>
                    </div>
                </Box>
                    
            </Container>
        </div>
    );
}

export default NotFoundPage;