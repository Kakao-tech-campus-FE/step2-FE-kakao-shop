import React from "react";

export default function Button({ text, handleClick }) {
  return (
    <button
      className="bg-black text-white inline-block px-5 py-3 text-xl my-2 mr-4"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
