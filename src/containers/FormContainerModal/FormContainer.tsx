import React, { useState } from 'react';
import FormModal from '../../components/FormModal/FormModal';

interface Modal {
    price: number
}
export const FormContainerModal = ({ price }: Modal) => {

    const onSubmit = (v: {}) =>
        alert("Submit value: " + JSON.stringify(v, null, 2));

    const [, setFormFields] = useState({});
    const [, setErrors] = useState({});
    const [, setValid] = useState(true);

    return (
    <FormModal
        onChange={(ff: Record<string, string>, v: boolean, e: {}) => {
            setFormFields(ff);
            setValid(v);
            setErrors(e);
        }}
        onSubmit={onSubmit}
        price={price}
    />
    )
}