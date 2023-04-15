import { createContext } from 'react';
import { string } from 'prop-types';

interface FormContextInterface {
    isDirty: (name: string) => boolean;
    setDirty: (name: string) => void;
    setInvalid: (name: string, error: {}) => void;
    setValue: (name: string, event: string) => void;
    value: (name: string) => string | undefined;
}
const defaultValue = {
    isDirty: (name: string) => false,
    setDirty: (name: string) => {},
    setInvalid: (name: string, error: {}) => {},
    setValue: (name: string, error: {}) => {},
    value: (name: string) => 'a',
};
const FormContext = createContext<FormContextInterface>(defaultValue);

export default FormContext;
