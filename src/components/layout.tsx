import { ComponentProps } from "react";
import { css } from "styled-system/css";

type LayoutProps = ComponentProps<"div">;

export function Layout({ children }: LayoutProps) {
  return <div className={styles.wrap}>{children}</div>;
}

const styles = {
  wrap: css({
    boxSizing: "border-box",
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "auto 1fr",
    gap: "4",
    p: "6",
    width: "100%",
    height: "100%",
    color: "white",
    bg: "gray.800",
    "& > :nth-child(1)": {
      gridColumnStart: 1,
      gridColumnEnd: 4,
    },
  }),
};
