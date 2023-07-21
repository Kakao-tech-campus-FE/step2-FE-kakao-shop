import React from "react";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Anchor from "../atoms/Anchor";
import Line from "../atoms/Line";
import Icon from "../atoms/Icon";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../store/userSlice";
import { persistor } from "../../App";
import Photo from "../atoms/Photo";

const GNB = ({
    className, // class
}) => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const puerge = async () => {
        await persistor.purge();
    };
    return (
        <div
            className={`GNB position-fixed z-1 top-0 d-flex flex-row align-items-center justify-content-between w-100 px-5 m-0 border bg-body ${className}`}
            style={{ height: "80px" }}
        >
            <div className={`Left-GNB flex-grow-0`}>
                <Photo src="/assets/shopping_logo.png" alt="쇼핑 로고" />
            </div>
            <div className={`Right-GNB d-flex flex-row align-items-center`}>
                <Anchor to="/cart">
                    <Icon className="fs-1" icon="shopping_cart" />
                </Anchor>
                <Icon className="fs-1" icon="search" />
                <Icon className="fs-1" icon="local_shipping" />
                <Line />
                {user.isLogin ? (
                    <>
                        <Label className="d-block pe-2">{user.user}님 </Label>
                        <Button
                            className="bg-transparent"
                            onClick={async () => {
                                dispatch(userLogout());
                                localStorage.removeItem("token");
                                setTimeout(() => puerge(), 200);
                            }}
                        >
                            로그아웃
                        </Button>
                    </>
                ) : (
                    <Anchor className="fw-bold" to="/login">
                        로그인
                    </Anchor>
                )}
            </div>
        </div>
    );
};

export default GNB;
