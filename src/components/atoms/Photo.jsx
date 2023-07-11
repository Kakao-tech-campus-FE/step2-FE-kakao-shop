import React from "react";

export default function Photo({ className, src, alt, hover }) {
  return (
    <picture className={className}>
      <img
        className={`w-inherit h-inherit object-cover ${
          hover ? "hover:scale-105 duration-200" : ""
        }`}
        src={src}
        alt={alt}
      />
    </picture>
  );
}
