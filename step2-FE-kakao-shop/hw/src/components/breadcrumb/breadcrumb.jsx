import React, { useState } from "react";
import "./breadcrumb.css";

const Bread = () => {
  return (
    <div class="container">
      <h1>Breadcrumb</h1>
      <ul class="breadcrumb">
        <ol class="item">
          <a href="http://localhost:3000/">home</a>
        </ol>
        <ol class="item">
          <a href="http://localhost:3000/">level1</a>
        </ol>
        <ol class="item">
          <a href="http://localhost:3000/">level2</a>
        </ol>
      </ul>
    </div>
  );
};

export default Bread;
