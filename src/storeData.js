import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    surname: "",
    email: "",
    title: "",
    message: "",
    notifications: 0,
}

const slice = createSlice({
    name: "data",
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateSurname: (state, action) => {
            state.surname = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updateTitle: (state, action) => {
            state.title = action.payload;
        },
        updateMessage: (state, action) => {
            state.message = action.payload;
        },
        updateNotifications: (state) => {
            state.notifications++;
        }
    }
});

export const {updateName, updateSurname, updateEmail, updateTitle, updateMessage, updateNotifications} = slice.actions;
export default slice.reducer;