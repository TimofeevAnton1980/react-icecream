import { useState, useEffect } from 'react';

export const useLoadRender = () => {
    const [render, forceRender] = useState(false);
    if (typeof document === 'undefined') return;
    else {
        let el = document?.querySelector('#dropdownMenu');

        useEffect(() => {
            function forceRenderMode() {
                forceRender(!render);
                console.log('OK');
            }
            el?.addEventListener('click', forceRenderMode);
            return () => el?.removeEventListener('click', forceRenderMode);
        }, []);
    }
};
