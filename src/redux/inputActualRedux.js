import {createSlice} from "@reduxjs/toolkit"

export const inputActualSlice = createSlice({
    name:"inputActual",
    initialState:{
    inputs:[],
    twoFirstInputs:[],
    isFetching:false,
    error:false
    },
    reducers:{
        //GET INPUT ALL
        getInputActualStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        getInputActualSuccess:(state,action)=>{
            state.isFetching=false;
            state.inputs=action.payload;
        },
        getInputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
        //GET INPUT TWO FIRST
        getTwoFirstInputActualStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        getTwoFirstInputActualSuccess:(state,action)=>{
            state.isFetching=false;
            state.twoFirstInputs=action.payload;
        },
        getTwoFirstInputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
        //ADD INPUT
        addInputActualStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        addInputActualSuccess:(state,action)=>{
            state.isFetching=false;
            state.inputs.push(action.payload);

        },
        addInputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true

        }

    }
})

export const{
             getInputActualStart,
             getInputActualSuccess,
             getInputActualFailure,
             addInputActualStart,
             addInputActualSuccess,
             addInputActualFailure,
             getTwoFirstInputActualStart,
             getTwoFirstInputActualSuccess,
             getTwoFirstInputActualFailure
                                    }=inputActualSlice.actions;
export default inputActualSlice.reducer 