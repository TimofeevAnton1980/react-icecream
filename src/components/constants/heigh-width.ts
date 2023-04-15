const isBrowser = typeof window !== 'undefined';
let heightRender = 150;
let imgSizeRender = 130;
let windowSize = 300;
let windowHeight = 300;
if (isBrowser) {
    windowSize = window.innerWidth;
    windowHeight = window.innerHeight;
    if (windowSize < 1000 && windowSize > 960) {
        heightRender = 250;
    }
    if (windowSize < 960 && windowSize > 900) {
        heightRender = 250;
    }
    if (windowSize < 900 && windowSize > 750) {
        heightRender = 250;
    }
    if (windowSize < 750 && windowSize > 600) {
        heightRender = 250;
    }
    if (windowSize < 600 && windowSize > 400) {
        heightRender = 370;
    }
    if (windowSize < 400) {
        heightRender = 370;
    }
}
export const size = heightRender;
export const imgSize = imgSizeRender;
export const widthWindow = windowSize;
export const heightWindow = windowHeight;
