import { ComponentPropsWithoutRef, FC } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

interface SkeletonLoadingProps extends InputProps {
  isLoading?: boolean;
}

const SkeletonLoading: FC<SkeletonLoadingProps> = ({
  isLoading,
  children,
  ...props
}) => {
  return (
    <div className={isLoading ? "animate-pulse" : ""} {...props}>
      {children}
    </div>
  );
};

export default SkeletonLoading;
