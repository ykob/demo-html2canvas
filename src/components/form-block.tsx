import { ComponentProps } from "react";
import { css, cx } from "styled-system/css";

type FormBlockProps = ComponentProps<"div">;

export function FormBlock({ className, ...props }: FormBlockProps) {
  return (
    <div {...props} className={cx(styles.wrap, className)}>
      FormBlock
    </div>
  );
}

const styles = {
  wrap: css({}),
};
