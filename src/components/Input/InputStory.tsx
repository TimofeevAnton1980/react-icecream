import styles from "./styles.module.css";
// import * as styles from "./styles.module.css";
import classnames from "classnames";
import React, { useState } from "react";
import icons from "../../images/sprite.svg";

interface InputInterface {
  className?: string;
  placeholder?: string;

  labelText?: string;

  value?: string;

  name?: string;
  /**
   * Label for attribute
   */
  htmlFor?: string;
  /**
   * Callback for when user typing in Input
   */
  // onChangeInput: any;
  primary?: boolean;
  invalid?: string;
  valid?: string;
  success?: string;
  id?: string;
  onChange?: (e: any) => void;
  onBlur?: () => void;
  type?: string;
}
export const Input: React.FC<InputInterface> = ({
  className,
  labelText,
  placeholder,
  name,
  value,
  htmlFor,
  invalid,
  valid,
  success,
  primary,
  id,
  onChange,
  onBlur,
  type,
}) => {
  const iconName = (
    invalid: string | undefined,
    success: string | undefined,
    valid: string | undefined
  ) => {
    if (invalid) return "error";
    if (success) return "success";
    if (valid) return null;
  };

  const modePrimary = primary ? `${styles.input}` : `${styles.input_valid}`;

  const modeSvg = () => {
    if (invalid) return `${styles.input__icon_error}`;
    if (success) return `${styles.input__icon_success}`;
    if (valid) return null;
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        className={classnames(
          styles.input,
          className,
          invalid,
          valid,
          success,
          modePrimary
        )}
        placeholder={placeholder || "Placeholder"}
        name={name || "test-name"}
        value={value}
        id={id}
        // htmlFor="test-for"
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
      <svg
        className={classnames(styles.input__icon, modeSvg(), className)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${icons}#${iconName(invalid, success, valid)}`} />
      </svg>
    </div>
  );
};
