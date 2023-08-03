import React from "react";
import { Link } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function Card({ children, to }) {
  return <Link to={staticServerUri + to}>{children}</Link>;
}
