import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  full?: boolean;
  theme?: "gray" | "line" | "red";
  size?: "sm" | "md" | "md-compact" | "lg" | "lg-compact" | "full";
}

export function Button({
  children,
  width,
  height,
  theme = "red",
  size = "md",
  full = false,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={cx(["basic-button", size, { full }, theme])}
      style={{ width, height }}
      {...restProps}
    >
      {children}
    </button>
  );
}
