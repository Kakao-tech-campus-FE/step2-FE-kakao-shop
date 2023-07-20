import React from "react";
import { Link } from "react-router-dom";

export default function Card({ children, to }) {
  return <Link to={to}>{children}</Link>;
}
