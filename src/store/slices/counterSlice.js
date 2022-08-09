import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

export const counterSlice=createSlice({
name:'counter',
initialState,
reducers:{
    incrementByAmount:(state,action) => {
        state.value+=action.payload
        
    },
    increment:(state) => {
        state.value+=1
        console.log("Ffg")
        
    },
    decrement:(state) => {
        state.value+=1
        console.log("Ffg")
        
    },
    
    decrementByAmount: (state,action) => {
      state.value -= action.payload
    },
}
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer