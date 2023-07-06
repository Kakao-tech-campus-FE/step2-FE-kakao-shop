import React from "react";
import Title from "../atoms/Title";
import { Link } from "react-router-dom";

const MainForm = () => {
  return (
    <div>
      <Link to="/">
        <Title>Main page</Title>
      </Link>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainForm;
