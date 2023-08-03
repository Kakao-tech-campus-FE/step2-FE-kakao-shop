import React from "react";

export default function Box({ children, className }) {
  return <div className={className}>{children}</div>;
}
