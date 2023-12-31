import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type HtmlBlockProps = ComponentProps<"div">;

export function HtmlBlock({ className, ...props }: HtmlBlockProps) {
  return (
    <div {...props} className={cx(styles.wrap, className)}>
      HtmlBlock
    </div>
  );
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
