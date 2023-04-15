const isBrowser = typeof window !== 'undefined';
let heightRender = 150;
let imgSizeRender = 130;
if (isBrowser) {
    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;

    if (widthWindow < 1000 && widthWindow > 960) {
        heightRender = 250;
    }
    if (widthWindow < 960 && widthWindow > 900) {
        heightRender = 250;
    }
    if (widthWindow < 900 && widthWindow > 750) {
        heightRender = 250;
    }
    if (widthWindow < 750 && widthWindow > 600) {
        heightRender = 250;
    }
    if (widthWindow < 600 && widthWindow > 400) {
        heightRender = 370;
    }
    if (widthWindow < 400) {
        heightRender = 370;
    }
}
export const size = heightRender;
export const imgSize = imgSizeRender;
