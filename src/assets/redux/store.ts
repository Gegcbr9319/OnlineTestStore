import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import productsSlice from './productsSlice';
import displaySlice from './displaySlice';

export const store = configureStore({
    reducer: {
        filterState: filterSlice,
        productsState: productsSlice,
        displayState: displaySlice,
    },
});
