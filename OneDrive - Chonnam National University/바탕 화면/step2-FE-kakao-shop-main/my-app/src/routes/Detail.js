import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductDetails, getCartList } from "../api";
import { staticServerUri } from "../config";

// components
import Counter from "../components/Counter.js";
import Container from "react-bootstrap/Container";

// css
import "../styles/Detail.css";

function Detail() {
    const { productId } = useParams();
}