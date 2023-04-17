import { createSlice } from '@reduxjs/toolkit';

interface IProducts {
    id: number;
    title: string;
    regular_price: {
        currency: string;
        value: number;
    };
    brand: number;
}

type SliceState = { cartData: IProducts[] };
const initialState: SliceState = { cartData: [] };

const cartDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        resetData(state) {
            state.cartData.length = 0;
        },
        updateData(state, action) {
            state.cartData = action.payload;
        },
    },
});

export const { resetData, updateData } = cartDataSlice.actions;
export default cartDataSlice.reducer;
