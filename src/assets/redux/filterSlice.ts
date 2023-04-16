import { createSlice } from '@reduxjs/toolkit';

type SliceState = { filtr: string[] };
const initialState: SliceState = { filtr: [] };

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        resetFilter(state, action) {
            state.filtr.length = 0;
        },
        addFilter(state, action) {
            this.resetFilter;
            state.filtr.push(action.payload);
        },
    },
});

export const { resetFilter, addFilter } = filterSlice.actions;
export default filterSlice.reducer;
