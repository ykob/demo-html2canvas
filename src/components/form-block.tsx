import { ComponentProps } from "react";
import { Button, InputField, InputFieldMulti, LayoutBlock, FormItem } from "./";
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
        <div className={styles.buttons}>
          <Button>Submit</Button>
          <Button buttonColor="secondary">Reset</Button>
        </div>
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
  buttons: css({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    gap: 2,
  }),
};
