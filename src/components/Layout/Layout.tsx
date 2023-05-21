import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useEffect, useLayoutEffect, useState } from 'react';
import { arrayImagesBg } from '../constants/imgBg';
import * as styles from './styles.module.css';
import { useInnerHeight } from '../../hooks/innerHeight';

interface LayoutInterface {
    children: React.ReactNode;
    mode: string;
    inProp?: boolean;
}

const Layout: React.FC<LayoutInterface> = ({ children, mode, inProp }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    // const [_mode, setmode] = useState('home');
    // useEffect(() => {
    //     document.body.classList.add('home');'\
    // }, []);
    // useEffect(() => {
    //     console.log(_mode);
    //     document.body.classList.remove(_mode);
    //     document.body.classList.add(mode);
    //     setmode(mode);
    // }, [mode]);
    // console.log(_mode);
    // const nodeRef = useRef(null);

    useEffect(() => {
        switch (mode) {
            case 'home':
                document.body.style.backgroundImage = `url('${arrayImagesBg.bg5}')`;
                break;
            case 'payment':
                document.body.style.backgroundImage = `url('${arrayImagesBg.bg6}')`;
                break;
            case 'catalog':
                document.body.style.backgroundImage = `url('${arrayImagesBg.bg3}')`;
                break;
            case 'catalog1':
                document.body.style.backgroundImage = `url('${arrayImagesBg.bg4}')`;
                break;
            case 'catalog2':
                document.body.style.backgroundImage = `url('${arrayImagesBg.bg2}')`;
                break;
            case 'promotion':
                document.body.style.backgroundImage = `url('${arrayImagesBg.bg4}')`;
                break;
            case 'blog':
                document.body.style.backgroundImage = `url('${arrayImagesBg.bg4}')`;
                break;
            default:
                document.body.style.backgroundImage = `url('${arrayImagesBg.bg5}')`;
                break;
        }
        // console.log(mode);
    }, [mode]);
    useInnerHeight();
    return (
        // <div className={classNames(`styles.${mode}`)}>
        <div className={styles.wrapper}>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
