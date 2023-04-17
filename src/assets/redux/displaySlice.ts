import { createSlice } from '@reduxjs/toolkit';

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

type SliceState = { display: IProducts[] };
const initialState: SliceState = { display: [] };

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        updateDisplay(state, action) {
            state.display.length = 0;
            state.display = action.payload;
        },
    },
});

export const { updateDisplay } = displaySlice.actions;
export default displaySlice.reducer;
