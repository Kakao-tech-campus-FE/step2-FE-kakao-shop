import React from "react";

export default function Icon({
  children,
  alt,
  width = "w-auto",
  height = "h-auto",
}) {
  return <img src={children} alt={alt} className={`${width} ${height}`} />;
}
