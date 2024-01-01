import { ComponentProps } from "react";
import { LayoutBlock } from "./";

type HtmlBlockProps = ComponentProps<"div">;

export function HtmlBlock({ ...props }: HtmlBlockProps) {
  return <LayoutBlock {...props}>HtmlBlock</LayoutBlock>;
}
