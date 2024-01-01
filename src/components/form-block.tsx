import { ComponentProps } from "react";
import { LayoutBlock } from "./";

type FormBlockProps = ComponentProps<"div">;

export function FormBlock({ ...props }: FormBlockProps) {
  return <LayoutBlock {...props}>FormBlock</LayoutBlock>;
}
