import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './storeData';

const store = configureStore({
    reducer: {
        data: sliceReducer
    }
});

export default store;