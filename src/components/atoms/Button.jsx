import React from "react";

const COLOR = {
  transparent: "bg-transparent text-black",
  yellow: "bg-yellow text-black",
  black: "bg-black text-white",
};

const RADIUS = {
  sm: "rounded-md",
  lg: "rounded-full",
};

const TESTSIZE = {
  sm: "text-sm",
  lg: "text-lg",
};

const beforeContentStyle =
  "relative before:absolute before:top-0 before:bottom-0 before:-left-1 before:my-auto before:content-[''] before:w-before before:h-5 before:bg-gray-400";

export default function Button({
  children,
  margin,
  padding,
  textsize,
  color,
  radius = "",
  before,
  onClick = () => {},
}) {
  return (
    <button
      className={`${padding} ${margin} ${TESTSIZE[textsize]} ${COLOR[color]} ${
        RADIUS[radius]
      } ${before ? beforeContentStyle : ""} text-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
