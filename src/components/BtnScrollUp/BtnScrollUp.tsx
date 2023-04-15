import React from 'react';

function BtnScrollUp() {

    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div style={{cursor: "pointer", color: "#c50067"}} onClick={handlerScrollUp}>&#9650; To Top</div>
    );
}

export default BtnScrollUp;