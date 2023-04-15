import * as styles from './styles.module.css';
import React from 'react';
import { NewInBlog } from './NewInBlog/NewInBlog';
import { MailingList } from './MailingList/MailingList';

const NewInBlogMailingLst = () => {
    return (
        <div className={styles.root}>
            <NewInBlog />
            <MailingList />
        </div>
    );
};
export default NewInBlogMailingLst;
