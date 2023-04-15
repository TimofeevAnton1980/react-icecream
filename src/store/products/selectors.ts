import { RootState } from '../store';
import { Product } from './index';

type ProductProps = {
    state: RootState;
    productId: string | undefined;
};
export const selectProductState = (state: RootState) => state.product;

export const selectProductIds = (state: RootState) =>
    selectProductState(state).ids;

export const selectProductById = ({
    state,
    productId,
}: ProductProps): Product => {
    return selectProductState(state).entities[productId || ''];
};

export const selectProductNameById = ({ state, productId }: ProductProps) =>
    selectProductState(state).entities[productId || '']?.name;

export const selectProductImgById = ({ state, productId }: ProductProps) =>
    selectProductState(state).entities[productId || '']?.img;

export const selectProductPriceById = ({ state, productId }: ProductProps) =>
    selectProductState(state).entities[productId || '']?.price;

export const selectProductPromotion = ( state : RootState) => {
    let arrays = Object.values(selectProductState(state).entities).filter((product) =>
        product.promotion);
    let newArr = [];
    for (let i = 0; i < arrays.length; i++) {
        newArr.push(arrays[i].id);
    }
    return newArr;
}

export const selectProductFruits = ( state : RootState) => {
    let arrays = Object.values(selectProductState(state).entities).filter((product) =>
        product.fruits);
    let newArr = [];
    for (let i = 0; i < arrays.length; i++) {
        newArr.push(arrays[i].id);
    }
    return newArr;
}

export const selectProductNoFruits = ( state : RootState) => {
    let arrays = Object.values(selectProductState(state).entities).filter((product) =>
        !product.fruits);
    let newArr = [];
    for (let i = 0; i < arrays.length; i++) {
        newArr.push(arrays[i].id);
    }
    return newArr;
}

export const selectIsProductsLoading = (state: RootState) =>
    selectProductState(state).status === 'loading';

export const selectIsProductsFailed = (state: RootState) =>
    selectProductState(state).status === 'failed';

export const selectProducts = (state: RootState) => {
    let arrays = Object.values(selectProductState(state).entities);

    let newArr = [];
    for (let i = 0; i < arrays.length; i++) {
        newArr.push({ id: arrays[i].id, name: arrays[i].name });
    }
    return newArr;
};
