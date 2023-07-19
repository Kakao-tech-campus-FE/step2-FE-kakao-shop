import React from "react";
import Label from "../atoms/Label";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Anchor from "../atoms/Anchor";
import Line from "../atoms/Line";
import Icon from "../atoms/Icon";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../store/userSlice";
import { persistor } from "../../App";

const GNB = ({
    className, // class
}) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const puerge = async () => {
        await persistor.purge();
    };
    return (
        <div
            className={`GNB position-absolute z-3 d-flex flex-row align-items-center justify-content-between w-100 px-5 m-0 border ${className}`}
            style={{ height: "80px" }}
        >
            <div className={`Left-GNB flex-grow-0`}>
                <Label>Kakao 쇼핑</Label>
            </div>
            <div className={`Right-GNB d-flex flex-row align-items-center`}>
                <Icon className="fs-1" icon="shopping_cart" />
                <Icon className="fs-1" icon="search" />
                <Icon className="fs-1" icon="local_shipping" />
                <Line />
                {user.isLogin ? (
                    <>
                        <Label>{user.user}</Label>
                        <Button
                            onClick={async () => {
                                dispatch(userLogout());
                                setTimeout(() => puerge(), 200);
                            }}
                        >
                            로그아웃
                        </Button>
                    </>
                ) : (
                    <Anchor to="/login">로그인</Anchor>
                )}
            </div>
        </div>
    );
};

export default GNB;
