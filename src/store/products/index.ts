import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { normalizedProducts } from '../../components/constants/normalized-fixtures';

export type ProductState = {
    entities: Record<string, Product>;
    ids: string[];
    status: string;
};

export interface Product {
    id: string;
    name: string;
    price: number;
    img: string;
    rating: number;
    promotion: boolean;
    fruits: boolean
}
type Acc = Record<string, Product>;

const initialState: ProductState = {
    entities: normalizedProducts.reduce((acc: Acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {}),
    ids: normalizedProducts.map(({ id }) => id),
    status: 'notStarted',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        startLoading: (state: ProductState, action: PayloadAction<null>) => {
            state.status = 'loading';
        },
        failLoading: (state: ProductState, action: PayloadAction<{}>) => {
            state.status = 'failed';
        },
        successLoading: (
            state: ProductState,
            action: PayloadAction<Product[]>,
        ) => {
            state.entities = (action.payload || []).reduce(
                (acc: Acc, product) => {
                    acc[product.id] = product;
                    return acc;
                },
                { ...state.entities },
            );

            state.ids = [
                ...state.ids,
                ...(action.payload || []).map(({ id }) => id),
            ];

            state.status = 'success';
        },
    },
});

export default productSlice;
