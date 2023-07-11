import { FC, PropsWithChildren } from "react";

interface BadgeProps {
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const COLORS = {
  primary: "bg-blue-500",
  secondary: "bg-gray-500 text-gray-100",
  success: "bg-green-500",
  danger: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-indigo-500",
  light: "bg-gray-100",
  dark: "bg-gray-800 text-white",
} as const;

const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  children,
  color = "secondary",
}) => {
  return (
    <span className={`py-[2px] px-1 rounded-md ${COLORS[color]}`}>
      {children}
    </span>
  );
};

export default Badge;
