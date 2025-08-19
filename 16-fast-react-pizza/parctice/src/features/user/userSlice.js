import { createSlice } from "@reduxjs/toolkit";

const initState = {
    name: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        updateName(state, action) {
            state.name = action.payload;
        },
    },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
