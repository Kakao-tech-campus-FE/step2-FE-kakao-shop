import React from "react";

export default function Photo({ width, heigth, src, alt }) {
  return (
    <picture className={`${width} ${heigth}`}>
      <img className="w-inherit h-inherit object-cover" src={src} alt={alt} />
    </picture>
  );
}
