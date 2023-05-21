import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BasketState = Record<string, number>;

export interface BasketActionPayload {
    productId: string;
}
const initialState: BasketState = {};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        add: (
            state: BasketState,
            action: PayloadAction<BasketActionPayload>,
        ) => {
            const productId = action.payload?.productId;
            if (!productId) {
                return state;
            }
            state[productId] = (state[productId] || 0) + 1;
            return state;
        },
        remove: (
            state: BasketState,
            action: PayloadAction<BasketActionPayload>,
        ) => {
            const productId = action.payload?.productId;
            if (!productId || !state[productId]) {
                return state;
            }
            state[productId] = (state[productId] || 0) - 1;
            return state;
        },
        clean: () => ({}),
    },
});
export default basketSlice;
