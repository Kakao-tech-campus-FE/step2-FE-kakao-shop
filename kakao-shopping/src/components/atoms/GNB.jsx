import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const GNB = () => {
    const isLogin = useSelector((state) => state.user.isLogin);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLogout());
    };
};
