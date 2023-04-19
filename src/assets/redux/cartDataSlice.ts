import { createSlice } from '@reduxjs/toolkit';

interface IProducts {
    id: number;
    title: string;
    regular_price: {
        currency: string;
        value: number;
    };
    brand: number;
    count: number;
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
            state.cartData = [...state.cartData, action.payload];
        },
        addCount(state, action) {
            state.cartData = state.cartData.map((item) => ({
                ...item,
                count: item.id === action.payload ? item.count + 1 : item.count,
            }));
        },
        deleteCount(state, action) {
            state.cartData = state.cartData.map((item) => ({
                ...item,
                count: item.id === action.payload ? item.count - 1 : item.count,
            }));
        },
        deleteFromCart(state, action) {
            state.cartData = state.cartData.filter((index) => index.id !== action.payload);
        },
    },
});

export const { resetData, updateData, addCount, deleteCount, deleteFromCart } =
    cartDataSlice.actions;
export default cartDataSlice.reducer;
