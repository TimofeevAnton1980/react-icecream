import { useState, useEffect } from 'react';

export const useWindowSize = function () {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', resize);
        resize();
        return () => window.removeEventListener('resize', resize);
    }, []);
    let heightRender = 150;
    if (width < 1000 && width > 960) {
        heightRender = 250;
    }
    if (width < 960 && width > 900) {
        heightRender = 250;
    }
    if (width < 900 && width > 750) {
        heightRender = 250;
    }
    if (width < 750 && width > 600) {
        heightRender = 250;
    }
    if (width < 600 && width > 400) {
        heightRender = 370;
    }
    if (width < 400) {
        heightRender = 370;
    }

    return [heightRender, width, height];
};
