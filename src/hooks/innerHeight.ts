import { useWindowSize } from './useWindowSize';

// export const useInnerHeight = () => {
//     const isBrowser = typeof window !== 'undefined';
//     if (isBrowser) {
//         (function init100vh() {
//             function setHeight() {
//                 const vh = window.innerHeight * 0.01;
//                 document.documentElement.style.setProperty('--vh', `${vh}px`);
//                 // console.log(vh * 100);
//             }
//
//             setHeight();
//             window.addEventListener('resize', setHeight);
//         })();
//     }
// };

export const useInnerHeight = () => {
    const [, , height] = useWindowSize();

    function setScreen() {
        const vh = height * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreen();
};
