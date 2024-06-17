import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { twMerge } from "tailwind-merge";

import { tv } from "tailwind-variants";

const button = tv({
  base: "text-center min-h-[2.5rem] py-1 px-8 items-center justify-center rounded-md text-md font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600",
  variants: {
    variant: {
      primary: "bg-green-600 text-zinc-50 hover:bg-green-700",
      secondary: "text-font text-zinc-50 border border-zinc-50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...{
        ...props,
      }}
      className={twMerge(
        button({
          variant,
        }),
        className
      )}
    >
      {children}
    </button>
  );
};
