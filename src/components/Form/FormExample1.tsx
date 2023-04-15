import { useEffect, useState } from "react";
import React from "react";
import SimpleForm from "./SimpleForm";
import InputField from "./InputField";
import "./Form.css";
import { Button } from "../Button/Button";

interface FormInterface {
  onSubmit: (v: {}) => void;
  onChange: (ff: Record<string, string>, v: boolean, e: {}) => void;
}

const FormExample1: React.FC<FormInterface> = ({ onSubmit, onChange }) => {
  const [formFields, setFormFields] = useState({});
  const [valid, setValid] = useState(true);
  const [errors, setErrors] = useState({});

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  useEffect(() => {
    if (onChange) {
      onChange(formFields, valid, errors);
    }
  }, [onChange, formFields, valid, errors]);

  return (
    <div className="TheForm">
      <h4>Остались вопросы, напишите нам:</h4>

      <SimpleForm
        value={formFields}
        onChange={setFormFields}
        onValid={(v, errs: {}) => {
          setValid(v);
          setErrors(errs);
        }}
      >
        <InputField
          name="Ваше имя"
          onValidate={(v) => (!v || v.length < 3 ? "Too short!" : null)}
          placeholder={"Name"}
        />
        <InputField
          name="Введите Ваш e-mail"
          type={"email"}
          placeholder={"sophie@example.com"}
          onValidate={(v) =>
            !v || !EMAIL_REGEXP.test(v) ? "Not correct!" : null
          }
        />

        <InputField
          name="Введите Ваше сообщение"
          onValidate={(v) => (!v ? "Not correct!" : null)}
          placeholder={"text"}
        />

        <Button
          onClick={() => onSubmit && onSubmit(formFields)}
          disabled={!valid}
          className="TheForm__button"
          primary={true}
        >
          Submit!
        </Button>
      </SimpleForm>
    </div>
  );
};

export default FormExample1;
