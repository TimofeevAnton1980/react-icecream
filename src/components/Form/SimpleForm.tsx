import { useCallback, useEffect, useState } from "react";
import FormContext from "./FormContext";
import "./SimpleForm.css";
import * as React from "react";

interface SimpleFormInterface {
  children: React.ReactNode;
  value: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
  onValid: (v: boolean, errs: {}) => void;
}
// type InitialProps = Record<string, string>;
// const InitialState: InitialProps = {};

const SimpleForm = ({
  children,
  value,
  onChange,
  onValid,
}: SimpleFormInterface) => {
  const [values, setValues] = useState(value || {});
  const [dirtyFields, setDirtyFields] = useState({});
  const [invalidFields, setInvalidFields] = useState<any>({});

  useEffect(() => {
    setValues(value || {});
  }, [value]);

  useEffect(() => {
    if (onChange) {
      onChange(values);
    }
  }, [onChange, values]);
  useEffect(() => {
    if (onValid) {
      onValid(
        Object.keys(invalidFields).every((i) => !invalidFields[i]),
        invalidFields
      );
    }
  }, [onValid, invalidFields]);
  const setValue = useCallback(
    (field: string, v: string) => setValues((vs) => ({ ...vs, [field]: v })),
    [setValues]
  );
  const getValue = useCallback((field: string) => values[field], [values]);
  const setDirty = useCallback(
    (field: string) => setDirtyFields((df) => ({ ...df, [field]: true })),
    [setDirtyFields]
  );
  const getDirty = useCallback(
    (field: string) => Object.keys(dirtyFields).includes(field),
    [dirtyFields]
  );
  const setInvalid = useCallback(
    (field: string, error: {}) => {
      setInvalidFields((i: any) => ({
        ...i,
        [field]: error ? error : undefined,
      }));
    },
    [setInvalidFields]
  );
  // console.log(values);
  // console.log(invalidFields);
  // console.log(dirtyFields);
  const form = {
    setValue: setValue,
    value: getValue,

    setDirty: setDirty,
    isDirty: getDirty,

    setInvalid: setInvalid,
  };

  return (
    <div className="SimpleForm-container">
      <FormContext.Provider value={form}>{children}</FormContext.Provider>
    </div>
  );
};

export default SimpleForm;
