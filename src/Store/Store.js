import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "./Reducers/BookingReducers";

// to create a store 

export const store = configureStore({
    reducer: {
        bookingReducer
    }
})