import React from "react";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function Photo({ className, src, alt, hover, asset = false }) {
  return (
    <picture className={className}>
      <img
        className={`w-inherit h-inherit object-cover ${
          hover ? "hover:scale-105 duration-200" : ""
        }`}
        src={asset ? src : staticServerUri + src}
        alt={alt}
      />
    </picture>
  );
}
