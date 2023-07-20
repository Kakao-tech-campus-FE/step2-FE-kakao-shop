import { FC, ReactNode, useId } from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  rounded?: boolean;
}

const Toggle: FC<ToggleProps> = ({
  checked,
  onChange,
  children,
  rounded = true,
}) => {
  const uid = useId();

  return (
    <div className="toggle relative">
      <input
        className="hidden peer"
        type="checkbox"
        id={uid}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={uid}
        className={`absolute inline-block w-16 h-8 cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#C0C0C0]  before:absolute before:h-[1.6rem] before:w-[1.6rem] before:bottom-[0.2rem] before:left-[0.2rem] before:bg-white before:transition-all before:duration-300 peer-checked:bg-[#007BFF] peer-checked:before:translate-x-8 ${
          rounded ? "rounded-full before:rounded-full" : ""
        }`}
      ></label>
      <label
        className="flex h-fit min-h-8 w-full items-center text-[#007BFF] cursor-pointer "
        htmlFor={uid}
      >
        <span className="ml-20 translate-y-[0.2rem]">{children}</span>
      </label>
    </div>
  );
};

export default Toggle;
