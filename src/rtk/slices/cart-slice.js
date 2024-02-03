import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartslice",
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        deleteFromCard: (state, action) => {
            return state.filter((product) => product.id != action.payload.id)
        },
        clearCard: (state, action) => {
            return []
        }
    },
})


export const { addToCart, deleteFromCard, clearCard } = cartSlice.actions;
export default cartSlice.reducer;