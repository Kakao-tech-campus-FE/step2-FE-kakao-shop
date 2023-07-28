import React, { useState, useEffect } from "react";
import Title from "../atoms/Title";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, logOut } from "../../store/slices/userSlice";
import Button from "../atoms/Button";
import GNB from "../atoms/GNB";

const HomeForm = () => {
  return <GNB />;
};

export default HomeForm;
