import styles from "./styles.module.scss";
import classNames from "classnames";

function Button({ content, isPrimary = true, size, className, ...props }) {
  const { btn, primaryBtn, secondaryBtn, small } = styles;
  return (
    <button
      className={classNames(btn, className, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary,
        [small]: size === "small",
      })}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
