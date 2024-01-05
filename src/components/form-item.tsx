import { ComponentProps } from "react";

type FormItemProps = ComponentProps<"div"> & {
  label: string;
};

export function FormItem({ label, children }: FormItemProps) {
  return (
    <div>
      <div>{label}</div>
      <div>{children}</div>
    </div>
  );
}
