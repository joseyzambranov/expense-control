import {createSlice} from "@reduxjs/toolkit"

export const outputActualSlice = createSlice({
    name:"outputActual",
    initialState:{
    outputs:[],
    isFetching:false,
    error:false
    },
    reducers:{
        //GET OUTPUT ALL
        getOutputActualStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        getOutputActualSuccess:(state,action)=>{
            state.isFetching=false;
            state.outputs=action.payload;
        },
        getOutputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        }

    }
})

export const{getOutputActualStart,
             getOutputActualSuccess,
             getOutputActualFailure}=outputActualSlice.actions;
export default outputActualSlice.reducer 