import classnames from "classnames";
import styles from "./styles.module.css";
// import * as styles from "./styles.module.css";
import React from "react";

interface ButtonInterface {
  className?: string;
  name?: string;
  children?: React.ReactNode;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  onAdd?: (f: any) => any;
}

export const Button: React.FC<ButtonInterface> = ({
  className,
  name,
  children,
  backgroundColor,
  primary,
  size,
  disabled,
  ...others
}) => {
  const mode = primary
    ? `${styles.button_primary}`
    : `${styles.button_secondary}`;
  return (
    <button
      type="button"
      className={classnames(
        styles.button,
        { [styles.button__small]: size === "small" },
        { [styles.button__large]: size === "large" },
        mode,
        className
      )}
      style={{ backgroundColor }}
      {...others}
      disabled={disabled}
    >
      {children}
      {name}
    </button>
  );
};
