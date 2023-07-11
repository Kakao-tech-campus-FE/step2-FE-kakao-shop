import { FC, HTMLAttributes } from "react";

interface TxtProps extends HTMLAttributes<HTMLSpanElement> {
  typograph?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const TYPOGRAPH = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  p: "text-base font-normal",
} as const;

const COLOR = {
  primary: "text-blue-500",
  secondary: "text-green-500",
  danger: "text-red-500",
  warning: "text-yellow-500",
  info: "text-gray-500",
  light: "text-white",
  dark: "text-black",
};

const Txt: FC<TxtProps> = ({ typograph = "p", color = "dark", ...props }) => {
  return (
    <span className={`${TYPOGRAPH[typograph]} ${COLOR[color]}`} {...props} />
  );
};

export default Txt;
