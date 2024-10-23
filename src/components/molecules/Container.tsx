import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = ComponentProps<"div">;

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "container px-4 md:px-6 mx-auto max-w-5xl lg:max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
