import React from "react";

export default function Container({ children, className }) {
  return <div className={className}>{children}</div>;
}
