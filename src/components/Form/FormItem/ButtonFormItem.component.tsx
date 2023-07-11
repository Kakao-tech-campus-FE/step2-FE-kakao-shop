import { ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;
interface ButtonFormItemProps extends ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  primary: "bg-blue-500 hover:bg-blue-600",
  secondary: "bg-gray-500 hover:bg-gray-600",
  success: "bg-green-500 hover:bg-green-600",
  danger: "bg-red-500 hover:bg-red-600",
  warning: "bg-yellow-500 hover:bg-yellow-600",
  info: "bg-indigo-500 hover:bg-indigo-600",
  light: "bg-gray-100 hover:bg-gray-200",
  dark: "bg-gray-800 hover:bg-gray-900",
} as const;

/**
 * ButtonFormItem component
 * @param {React.ReactNode} children - 버튼의 내용
 * @param {string} type - 버튼의 타입
 * @param {function} onClick - 버튼의 클릭 이벤트
 * @param {string} color - 버튼의 색상
 * @returns {JSX.Element} - ButtonFormItem component
 * @constructor
 * @example
 * <ButtonFormItem type="submit" color="primary">Submit</ButtonFormItem>
 * <ButtonFormItem type="button" color="primary" onClick={() => console.log("Hello world")}>Click me</ButtonFormItem>
 * <ButtonFormItem type="button" color="primary" onClick={() => console.log("Hello world")}>
 *  <span>Click me</span>
 * </ButtonFormItem>
 */
const ButtonFormItem: FC<ButtonFormItemProps> = ({
  children,
  type,
  onClick,
  color,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg py-4 px-8 w-full ${COLORS[color]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonFormItem;
