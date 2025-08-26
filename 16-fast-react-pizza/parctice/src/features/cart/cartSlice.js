import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
        deleteItem(state, action) {
            state.items = state.items.filter((item) => item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state, action) {
            const item = state.items.find((item) => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.unitPrice * item.quantity;
        },
        decreaseItemQuantity(state, action) {
            const item = state.items.find((item) => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.unitPrice * item.quantity;
            if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
        },

        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addItem, deleteItem, clearCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalQuantity = (state) => {
    return state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
};

export const getTotalPrice = (state) => {
    return state.cart.items.reduce((acc, item) => acc + item.totalPrice, 0);
};

export const getCurrentQuantityById = (id) => (state) => {
    return state.cart.items.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

export const getCart = (state) => {
    return state.cart.items;
};
