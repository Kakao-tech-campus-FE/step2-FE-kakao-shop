import { FC, HTMLAttributes } from "react";
import classnames from "classnames";

interface TxtProps extends HTMLAttributes<HTMLSpanElement> {
  typograph?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "sm";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  className?: string;
}

const TYPOGRAPH = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  p: "text-base font-normal",
  sm: "text-sm font-normal",
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

const Txt: FC<TxtProps> = ({
  typograph = "p",
  color = "dark",
  className,
  ...props
}) => {
  return (
    <span
      className={classnames(TYPOGRAPH[typograph], COLOR[color], className)}
      {...props}
    />
  );
};

export default Txt;
