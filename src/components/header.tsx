import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type HeaderProps = ComponentProps<"header">;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header {...props} className={cx(styles.wrap, className)}>
      <h1>html2canvas demo</h1>
    </header>
  );
}

const styles = {
  wrap: css({
    fontSize: "4xl",
  }),
};
