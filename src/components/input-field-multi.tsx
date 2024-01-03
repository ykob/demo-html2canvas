import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type InputFieldMultiProps = ComponentProps<"textarea">;

export function InputFieldMulti({
  className,
  children,
  ...props
}: InputFieldMultiProps) {
  return (
    <textarea {...props} className={cx(styles.wrap, className)}>
      {children}
    </textarea>
  );
}

const styles = {
  wrap: css({
    boxSizing: "border-box",
    width: "100%",
    height: "8em",
    p: 2,
    border: "1px solid",
    rounded: "sm",
  }),
};
