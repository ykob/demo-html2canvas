import { ComponentProps } from "react";
import { css, cva, cx } from "styled-system/css";

type ButtonProps = ComponentProps<"button"> & {
  buttonColor?: "primary" | "secondary";
};

export function Button({
  buttonColor = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cx(styles.wrap({ buttonColor }), className)} {...props}>
      {children}
    </button>
  );
}

const styles = {
  wrap: cva({
    base: {
      height: 10,
      px: 6,
      rounded: "md",
      color: "white",
      cursor: "pointer",
    },
    variants: {
      buttonColor: {
        primary: {
          bg: "blue.700",
        },
        secondary: {
          bg: "gray.600",
        },
      },
    },
  }),
};
