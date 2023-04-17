import { createSlice } from '@reduxjs/toolkit';

type SliceState = { numberCart: number };
const initialState: SliceState = { numberCart: 0 };

const cartNumberSlice = createSlice({
    name: 'numberCart',
    initialState,
    reducers: {
        resetNumber(state) {
            state.numberCart = 0;
        },
        updateNumber(state, action) {
            state.numberCart = action.payload;
        },
    },
});

export const { resetNumber, updateNumber } = cartNumberSlice.actions;
export default cartNumberSlice.reducer;
