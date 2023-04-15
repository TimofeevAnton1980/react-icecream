import React from "react";
import {useAppSelector} from "../../hooks/hook_ts";
import {selectProductIds} from "../../store/products/selectors";
import {RootState} from "../../store/store";
import {Hits} from "../../components/Hits/Hits";

export const HitsContainer = () => {
    const productIds = useAppSelector((state: RootState) => selectProductIds(state));
    // console.log(productIds);
    return (
        <Hits productIds={productIds}/>
    )
};