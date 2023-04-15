import React from 'react';
import * as styles from './styles.module.css';
import { imgSize } from '../constants/heigh-width';
import { apelsinImages } from '../constants/imgApelsin';
// import { ImCalendar } from 'react-icons/Im';
import { Link } from 'gatsby';

interface ItemInterface {
    style: {};
    blogName: string;
    blogImg: string;
    blogText: string;
    blogDate: string;
    blogPage: string
}
export const BlogItem: React.FC<ItemInterface>  = ({ style, blogName, blogImg, blogText, blogDate, blogPage }) => {
    const apelsinImg = apelsinImages[blogImg];

    return(
        <div className={styles.item}  style={{ ...style }}>
            <div className={styles.dateWrap}>
            {/*<span><ImCalendar /> </span>*/}
            <span>Опубликовано: {blogDate}</span>
            </div>
                <h2 className={styles.title}><Link to={`/${blogPage}`} state={{ mode: "blog", blogDate: `${blogDate}`, blogName: `${blogName}`}} title="Новость подробнее">{blogName}</Link></h2>
            <div className={styles.main}>
            <img
                alt={blogName}
                src={apelsinImg}
                className={styles.img}
                width={imgSize}
                height={imgSize}
            />
            <div>{blogText}</div>
            </div>
            <Link to={`/${blogPage}`} state={{ mode: "blog" , blogDate: `${blogDate}`, blogName: `${blogName}`}} title="Новость подробнее" className={styles.link} >Подробнее...</Link>
        </div>
    )
}