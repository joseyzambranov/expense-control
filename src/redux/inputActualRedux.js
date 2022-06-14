import {createSlice} from "@reduxjs/toolkit"

export const inputActualSlice = createSlice({
    name:"inputActual",
    initialState:{
    inputs:[],
    twoFirstInputs:[],
    total:0,
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
            state.total = action.payload.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)
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
            state.total = action.payload.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)

        },
        addInputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true

        },
         //LOGOUT
         inputLogout:(state)=>{
            state.inputs=[];
            state.twoFirstInputs=[]
            state.total=0;
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
             getTwoFirstInputActualFailure,
             inputLogout
                                    }=inputActualSlice.actions;
export default inputActualSlice.reducer 