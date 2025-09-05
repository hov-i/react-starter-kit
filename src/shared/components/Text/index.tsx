import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export interface TextProps {
  children: React.ReactNode;
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "title" | "subtitle";
}

export function Text({ children, size }: TextProps) {
  return <div className={cx(size)}>{children}</div>;
}
