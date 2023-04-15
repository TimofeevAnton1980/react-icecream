import React, { useContext } from 'react';
import { ClickContext } from '../BasketProvider/BasketProvider';
import { Transition } from 'react-transition-group';
import Basket from '../../components/Basket/Basket';
import { useAppSelector } from '../../hooks/hook_ts';
import { selectProductIdsFromBasket } from '../../store/basket/selectors';

interface BasketItemInterface {
    totalPrice: number;
    productCount?: number | false;
}
let inProp = false;
export const BasketItem = ({
    totalPrice,
    productCount,
}: BasketItemInterface) => {
    const productIdsBasket: string[] = useAppSelector(
        selectProductIdsFromBasket,
    );
    const { click, setClick } = useContext(ClickContext);
    const local = typeof localStorage !== 'undefined';
    const use = local ? localStorage.counter : null;
    // console.log(click);
    // console.log(use);
    const [last] = [...productIdsBasket].reverse();

    if ((use || click) && use === last && productIdsBasket?.length > 0) {
        inProp = true;
    }
    if (productIdsBasket?.length <= 0) {
        inProp = false;
        setClick('');
        local ? localStorage.setItem('counter', '') : null;
    }
    return (
        <Transition
            timeout={500}
            in={inProp}
            // onEnter={() => console.log('onEnter')}
            // onEntering={() => console.log('onEntering')}
            // onEntered={() => console.log('onEntered')}
            // onExit={() => console.log('onExit')}
            // onExiting={() => console.log('onExiting')}
            // onExited={() => console.log('onExited')}
        >
            {(state) => (
                <Basket
                    state={state}
                    productPrice={totalPrice}
                    productCount={productCount}
                    productId={click}
                />
            )}
        </Transition>
    );
};
