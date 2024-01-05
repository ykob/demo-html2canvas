import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type ButtonProps = ComponentProps<"button">;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cx(styles.wrap, className)} {...props}>
      {children}
    </button>
  );
}

const styles = {
  wrap: css({
    height: 10,
    px: 4,
    rounded: "md",
    color: "white",
    bg: "blue.700",
    cursor: "pointer",
  }),
};
