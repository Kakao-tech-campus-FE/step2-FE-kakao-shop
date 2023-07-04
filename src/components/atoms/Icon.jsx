import React from "react";

export default function Icon({ children, alt, width = "auto" }) {
  return <img src={children} alt={alt} className={width} />;
}
