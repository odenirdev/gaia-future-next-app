import { forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export const typography = tv({
  variants: {
    as: {
      h1: "text-font font-bold tracking-tighter md:leading-tighter text-4xl md:text-7xl/tight",
      h2: "text-3xl md:text-5xl/tight font-bold tracking-tighter md:leading-tighter",
      h3: "text-font text-2xl font-bold",
      h4: "text-font text-md md:text-xl font-bold",
      h5: "text-font text-sm md:text-md font-bold",
      p: "text-font text-md md:text-lg text-zinc-600",
      span: "text-font text-base",
      strong: "text-font font-bold",
      subtitle:
        "inline-block text-xl md:text-2xl tracking-tighter md:leading-tighter text-zinc-600",
      "pre-title":
        "inline-block rounded-lg bg-green-900 px-3 py-1 text-[0.75rem] md:text-sm text-zinc-200 w-fit",
    },
  },
});

type TypographyProps = ComponentProps<"p"> & {
  as:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "p"
    | "span"
    | "strong"
    | "pre-title"
    | "subtitle";
  children?: React.ReactNode;
  className?: string;
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as, children, className, ...props }, ref) => {
    switch (as) {
      case "h1":
        return (
          <h1
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={twMerge(typography({ as: "h1" }), className)}
            {...props}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={twMerge(typography({ as: "h2" }), className)}
            {...props}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={twMerge(typography({ as: "h3" }), className)}
            {...props}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={twMerge(typography({ as: "h4" }), className)}
            {...props}
          >
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={twMerge(typography({ as: "h5" }), className)}
            {...props}
          >
            {children}
          </h5>
        );
      case "p":
        return (
          <p
            ref={ref as React.Ref<HTMLParagraphElement>}
            className={twMerge(typography({ as: "p" }), className)}
            {...props}
          >
            {children}
          </p>
        );
      case "span":
        return (
          <span
            ref={ref as React.Ref<HTMLSpanElement>}
            className={twMerge(typography({ as: "span" }), className)}
            {...props}
          >
            {children}
          </span>
        );
      case "strong":
        return (
          <strong
            ref={ref as React.Ref<HTMLElement>}
            className={twMerge(typography({ as: "strong" }), className)}
            {...props}
          >
            {children}
          </strong>
        );
      case "pre-title":
        return (
          <span
            ref={ref as React.Ref<HTMLSpanElement>}
            className={twMerge(typography({ as: "pre-title" }), className)}
            {...props}
          >
            {children}
          </span>
        );
      case "subtitle":
        return (
          <span
            ref={ref as React.Ref<HTMLSpanElement>}
            className={twMerge(typography({ as: "subtitle" }), className)}
            {...props}
          >
            {children}
          </span>
        );
    }
  }
);

Typography.displayName = "Typography";

export default Typography;
