import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type CanvasBlockProps = ComponentProps<"div">;

export function CanvasBlock({ className, ...props }: CanvasBlockProps) {
  return (
    <div {...props} className={cx(styles.wrap, className)}>
      <div>CanvasBlock</div>
      <canvas id="canvas" width="500" height="500"></canvas>
    </div>
  );
}

const styles = {
  wrap: css({}),
};
