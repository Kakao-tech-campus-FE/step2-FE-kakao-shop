import React from "react";

export default function Icon({ children, alt, width = "w-auto" }) {
  return <img src={children} alt={alt} className={`w-${width}`} />;
}
