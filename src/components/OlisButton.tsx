import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva("", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export default function OlisButton(
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    size?: "default" | "sm" | "lg";
  },
  children: React.ReactNode
) {
  const { variant, size, className, ...rest } = props;
  return (
    <button className={classes({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
