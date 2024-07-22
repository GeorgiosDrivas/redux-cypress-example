import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './storeData';

const store = configureStore({
    reducer: {
        data: sliceReducer
    }
});

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];