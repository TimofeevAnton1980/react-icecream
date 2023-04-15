import FormExample1 from '../../components/Form/FormExample1';
import React, { useState } from 'react';

export const FormContainer = () => {

    const onSubmit = (v: {}) =>
        alert("Submit value: " + JSON.stringify(v, null, 2));

    const [, setFormFields] = useState({});
    const [, setErrors] = useState({});
    const [, setValid] = useState(true);

    return (
    <FormExample1
        onChange={(ff: Record<string, string>, v: boolean, e: {}) => {
            setFormFields(ff);
            setValid(v);
            setErrors(e);
        }}
        onSubmit={onSubmit}
    />
    )
}