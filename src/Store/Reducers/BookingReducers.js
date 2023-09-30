// this handles actions related to bookings that is selection of seats or unselection of seats

const { createSlice, configureStore } = require("@reduxjs/toolkit")
// or simply import {createSlice } from "@reduxjs/toolkit"


// createSlice creates reducers/actions, it take object as a parameter
// and then it takes 3 keys that is name , initial state and reducers
const initialState = {
    selectedSeats: [],
    price: 0,

}
// createslice return a slice so we store in a varaible

const bookingSlice = createSlice({
    name: "booking",
    initialState: initialState,
    reducers: {
        // here we can define multiple actions which reducers will be handling
        // key will be the action name
        // value will be the function to perform the action
        // reducer function takes two parameters
        select: (state, action) => {
            state.selectedSeats.push(action.payload)


        },
        unSelect: (state, action) => {

            const index = state.selectedSeats.indexOf(action.payload);
            state.selectedSeats.splice(index, 1)
        },
        pricing: (state, action) => {
            let money = state.price;
            money = money + 150;
            state.price = money

        },
        dePricing: (state) => {
            let money = state.price;
            money = money - 150;
            state.price = money

        },



    }

})

export const bookingReducer = bookingSlice.reducer;

export const bookingActions = bookingSlice.actions;

export const bookingSelector = (state) => state.bookingReducer.selectedSeats
export const bookingSelectorPrice = (state) => state.bookingReducer.price
