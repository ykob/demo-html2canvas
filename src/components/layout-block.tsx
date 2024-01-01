import { ComponentProps } from "react";
import { css } from "styled-system/css";

type LayoutBlockProps = ComponentProps<"div">;

export function LayoutBlock({ children }: LayoutBlockProps) {
  return <div className={styles.wrap}>{children}</div>;
}

const styles = {
  wrap: css({
    rounded: "md",
    overflow: "auto",
    p: 4,
    color: "black",
    bg: "white",
  }),
};
