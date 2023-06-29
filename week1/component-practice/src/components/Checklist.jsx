import React, { useState } from "react";

export default function Checklist({ item }) {
  return (
    <>
      <label key={item.id}>
        <input type="checkbox" />
        <span>{item.text}</span>
        <br></br>
      </label>
    </>
  );
}
