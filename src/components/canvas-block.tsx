import { ComponentProps } from "react";
import { LayoutBlock } from "./";

type CanvasBlockProps = ComponentProps<"div">;

export function CanvasBlock({ ...props }: CanvasBlockProps) {
  return (
    <LayoutBlock {...props}>
      <div>CanvasBlock</div>
      <canvas id="canvas" width="500" height="500"></canvas>
    </LayoutBlock>
  );
}
