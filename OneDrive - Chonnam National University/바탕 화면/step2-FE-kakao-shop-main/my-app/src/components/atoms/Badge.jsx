import React from "react"; // eslint-disable-line no-unused-vars

const Badge = ({ className, children }) => {
  return (
    <span className={`rounded-full px-4 py-2 text-xl ${className}`}>
      {children}
    </span>
  );
};

export default Badge;