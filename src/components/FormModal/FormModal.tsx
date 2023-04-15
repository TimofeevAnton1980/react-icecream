import { useEffect, useState } from "react";
import React from "react";
import SimpleForm from "./SimpleForm";
import InputField from "./InputField";
import "./Form.css";
import { Button } from "../Button/Button";

interface FormInterface {
  onSubmit: (v: {}) => void;
  onChange: (ff: Record<string, string>, v: boolean, e: {}) => void;
    price: number
}

const FormModal: React.FC<FormInterface> = ({ onSubmit, onChange, price }) => {
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
    <div className="TheFormModal">
      <h4>Заполните пожалуйста поля:</h4>

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
            name="Введите Ваш телефон"
            type="number"
            onValidate={(v) =>
                !v || parseInt(v) < 900 || v.length < 10 ? 'Must be at least 10' : null
            }
        />
        <InputField
            name="Введите Ваш адрес"
            onValidate={(v) => (!v || v.length < 10 ? "Not correct!" : null)}
            placeholder={"text"}
        />


      </SimpleForm>
        <span className="TheFormModal__total">
        Всего: ₽{price.toFixed(2)}
        </span>
        <Button
            onClick={() => onSubmit && onSubmit(formFields)}
            disabled={!valid}
            className="TheFormModal__button"
            primary={true}
        >
            Готово!
        </Button>
    </div>
  );
};

export default FormModal;
