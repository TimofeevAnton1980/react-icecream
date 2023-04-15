// import styles from './styles.module.css';
import * as styles from './styles.module.css';
import React, { useState } from 'react';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';

export const MailingList = () => {
    const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const [formEvent, setFormEvent] = useState('');

    const onSubmit = () => {
        !formEvent || !EMAIL_REGEXP.test(formEvent) ? alert("Email not correct!") :
            alert("Submit value: " + `${formEvent}`);
    }

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h3 className={styles.title}>Рассылка</h3>
                <p className={styles.text}>
                    Подпишитесь на нашу сладкую рассылку и будете всегда в курсе
                    всего самого вкусного, что у нас происходит.
                </p>
                <form className={styles.form}>
                    <div className={styles.inputWrapper}>
                        <Input primary={false} placeholder={'Default Email'} onChange={(event) => setFormEvent(event.target.value)} />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button primary={true} label={'Button'} name={'Done'} onClick={onSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    );
};
