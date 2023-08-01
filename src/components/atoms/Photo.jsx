import React from "react";

export default function Photo({ className, src, alt, hover, asset = false }) {
  return (
    <picture className={className}>
      <img
        className={`w-inherit h-inherit object-cover ${
          hover ? "hover:scale-105 duration-200" : ""
        }`}
        src={asset ? src : process.env.REACT_APP_API_URL + src}
        alt={alt}
      />
    </picture>
  );
}
