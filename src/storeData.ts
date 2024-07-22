import { createSlice } from "@reduxjs/toolkit";

interface InitialStateData {
    name: string;
    surname: string;
    email: string;
    title: string;
    message: string;
    notifications: number
};

const initialState: InitialStateData = {
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
        },
        clearAll: (state) => {
            state.name = "", state.surname = "",
            state.email = "", state.title = "",
            state.message = "";
        }
    }
});

export const {
  updateName,
  updateSurname,
  updateEmail,
  updateTitle,
  updateMessage,
  updateNotifications,
  clearAll,
} = slice.actions;
export default slice.reducer;
