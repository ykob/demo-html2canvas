import { ComponentProps } from "react";
import { InputField, InputFieldMulti, LayoutBlock, FormItem } from "./";
import { css } from "styled-system/css";

type FormBlockProps = ComponentProps<"div">;

export function FormBlock({ ...props }: FormBlockProps) {
  return (
    <LayoutBlock {...props}>
      <form className={styles.wrap}>
        <FormItem label="Name">
          <InputField />
        </FormItem>
        <FormItem label="Email">
          <InputField type="email" />
        </FormItem>
        <FormItem label="Content">
          <InputFieldMulti></InputFieldMulti>
        </FormItem>
      </form>
    </LayoutBlock>
  );
}

const styles = {
  wrap: css({
    display: "flex",
    flexDirection: "column",
    gap: 4,
  }),
};
