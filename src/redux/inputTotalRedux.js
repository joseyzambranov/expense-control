/*import { createSlice } from "@reduxjs/toolkit";

const inputTotalSlice= createSlice({
    name:"inputTotal",
    initialState:{
        total:0
    },
    reducers:{
        addInputTotal:(state,action)=>{
            
            state.total = action.payload.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)
        },
        loguotInputTotal:(state)=>{
            state.total=0
        }
    }
})

export const {addInputTotal,loguotInputTotal}= inputTotalSlice.actions;
export default inputTotalSlice.reducer;*/