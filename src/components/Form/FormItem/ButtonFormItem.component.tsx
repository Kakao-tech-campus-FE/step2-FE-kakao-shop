import Button, { ButtonProps } from "@/components/common/Button.component";
import { FC, MouseEvent } from "react";
interface ButtonFormItemProps extends ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: (e: MouseEvent) => void;
}

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
}) => (
  <Button
    type={type}
    onClick={onClick}
    color={color}
    className="rounded-lg py-4 px-8 w-full"
    {...props}
  >
    {children}
  </Button>
);

export default ButtonFormItem;
