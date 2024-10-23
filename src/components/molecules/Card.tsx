import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../atoms/Typography";

const Root = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={twMerge("bg-zinc-600 px-6 py-4 rounded-2xl h-full", className)}
    >
      {children}
    </div>
  );
};

const Title = ({
  children,
  className,
  as = "h3",
  ...props
}: ComponentProps<typeof Typography>) => {
  return (
    <Typography as={as} className={twMerge("font-thin", className)} {...props}>
      {children}
    </Typography>
  );
};

const Description = ({
  children,
  className,
  ...props
}: ComponentProps<typeof Typography> & { as?: "p" }) => {
  return (
    <Typography className={twMerge("", className)} {...props}>
      {children}
    </Typography>
  );
};

export const Card = {
  Root,
  Title,
  Description,
};
