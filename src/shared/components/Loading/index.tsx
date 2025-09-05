import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export function Loading({ visible }: { visible: boolean }) {
  return (
    <div className={cx("loading-bg", visible ? "fadeIn" : "fadeOut")}>
      <div style={{ position: "relative" }}>
        <img className={cx("loading-ball", "ballFadeIn")} src="/Loading.gif" />
      </div>
    </div>
  );
}
