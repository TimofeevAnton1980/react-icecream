import React, { useContext, useEffect, useState } from "react";
import FormContext from "./FormContext";
import * as InputCss from "../Input/styles.module.css";

import "./InputField.css";
import { Input } from "../Input/Input";

const splitCamelCase = (s: string) =>
  s
    .replace(/([a-z0-9])([A-Z0-9])/g, "$1 $2")
    .replace(/^([a-z])/, (x) => x.toUpperCase());

interface InputInterface {
  onValidate: (value: string | undefined) => string | null;
  name: string;
  label?: string;
  type?: string;
  className?: string;
  placeholder?: string;
}
const InputField = (props: InputInterface) => {
  const form = useContext(FormContext);

  const [error, setError] = useState<any | null>("");

  const { onValidate, name, label, type, placeholder, ...otherProps } = props;

  let value = form.value && form.value(name);

  let forClass = () => {
    if (
      onValidate(value) !== null &&
      value !== undefined &&
      onValidate(value) === null &&
      value !== undefined
    )
      return `${InputCss.input_valid}`;
    else return undefined;
  };

  useEffect(() => {
    if (onValidate !== null) {
      setError(onValidate(value));
    }
  }, [onValidate, value]);

  const setInvalid = form.setInvalid;

  useEffect(() => {
    if (setInvalid) {
      setInvalid(name, error);
    }
  }, [setInvalid, name, error]);

  return (
    <div className="InputField">
      <label htmlFor={name}>{label || splitCamelCase(name)}:</label>
      <Input
        type={type}
        placeholder={placeholder}
        invalid={
          onValidate(value) !== null && value !== undefined
            ? `${InputCss.input_invalid}`
            : undefined
        }
        valid={forClass()}
        success={
          onValidate(value) === null && value !== undefined
            ? `${InputCss.input_success}`
            : undefined
        }
        id={name}
        onBlur={() => form.setDirty(name)}
        value={value || ""}
        onChange={(event) => {
          form.setDirty(name);
          form.setValue(name, event.target.value);
        }}
        {...otherProps}
      />{" "}
      {
        <div className="InputField-error">
          {form.isDirty(name) && error ? error : <>&nbsp;</>}
        </div>
      }
    </div>
  );
};

export default InputField;
