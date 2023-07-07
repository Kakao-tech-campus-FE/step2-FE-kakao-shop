import React from "react";
import Label from "../atoms/Label";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../store/userSlice";
import { persistor } from "../../App";

const Header = ({
    className, // class
}) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const puerge = async () => {
        await persistor.purge();
    };
    return (
        <Container
            className={`d-flex flex-column align-items-center p-5 border ${className}`}
        >
            <Label>{user.user}</Label>
            {user.isLogin ? (
                <Button
                    onClick={async () => {
                        dispatch(userLogout());
                        setTimeout(() => puerge(), 200);
                    }}
                >
                    로그아웃
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    로그인
                </Button>
            )}
        </Container>
    );
};

export default Header;
