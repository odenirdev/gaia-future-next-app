import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export const typography = tv({
  variants: {
    as: {
      h1: "text-font font-bold tracking-tighter md:leading-tighter text-4xl md:text-6xl/tight",
      h2: "text-3xl md:text-5xl/tight font-bold tracking-tighter md:leading-tighter",
      h3: "text-font text-2xl font-bold",
      h4: "text-font text-md md:text-xl font-bold",
      h5: "text-font text-sm md:text-md font-bold",
      p: "text-font text-md md:text-md text-zinc-500",
      span: "text-font text-base",
      strong: "text-font font-bold",
      "pre-title":
        "inline-block rounded-lg bg-green-900 px-3 py-1 text-[0.75rem] md:text-sm",
    },
  },
});

type TypographyProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "strong" | "pre-title";
  children?: React.ReactNode;
  className?: string;
};

export const Typography = ({ as, children, className }: TypographyProps) => {
  switch (as) {
    case "h1":
      return (
        <h1 className={twMerge(typography({ as: "h1" }), className)}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={twMerge(typography({ as: "h2" }), className)}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={twMerge(typography({ as: "h3" }), className)}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={twMerge(typography({ as: "h4" }), className)}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={twMerge(typography({ as: "h5" }), className)}>
          {children}
        </h5>
      );
    case "p":
      return (
        <p className={twMerge(typography({ as: "p" }), className)}>
          {children}
        </p>
      );
    case "span":
      return (
        <span className={twMerge(typography({ as: "span" }), className)}>
          {children}
        </span>
      );
    case "strong":
      return (
        <strong className={twMerge(typography({ as: "strong" }), className)}>
          {children}
        </strong>
      );
    case "pre-title":
      return (
        <span className={twMerge(typography({ as: "pre-title" }), className)}>
          {children}
        </span>
      );
  }
};
