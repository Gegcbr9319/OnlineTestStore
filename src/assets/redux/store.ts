import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import productsSlice from './productsSlice';
import displaySlice from './displaySlice';

import cartDataSlice from './cartDataSlice';

export const store = configureStore({
    reducer: {
        filterState: filterSlice,
        productsState: productsSlice,
        displayState: displaySlice,
        cartDataState: cartDataSlice,
    },
});
