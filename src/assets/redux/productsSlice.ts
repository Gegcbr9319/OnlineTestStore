import { createSlice } from '@reduxjs/toolkit';

import productsJSON from '../../assets/data/products.json';

interface IProducts {
    type: string;
    id: number;
    sku: string;
    title: string;
    regular_price: {
        currency: string;
        value: number;
    };
    image: string;
    brand: number;
}

type SliceState = { products: IProducts[] };
const initialState: SliceState = { products: productsJSON };

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProducts(state) {
            state.products.length === 0;
            state.products = [...JSON.parse(JSON.stringify(productsJSON))];
        },
        updateProducts(state, action) {
            state.products = action.payload;
        },
    },
});

export const { resetProducts, updateProducts } = productsSlice.actions;
export default productsSlice.reducer;
