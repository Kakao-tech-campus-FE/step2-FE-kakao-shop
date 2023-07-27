import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function StarBox({ count }) {
  return (
    <ul className="flex">
      {Array.from({ length: count }, (_, i) => i + 1).map((value) => (
        <li key={value}>
          <AiFillStar className="text-2xl text-blue-500" />
        </li>
      ))}
    </ul>
  );
}
