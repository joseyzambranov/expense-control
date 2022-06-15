import {createSlice} from "@reduxjs/toolkit"

export const outputActualSlice = createSlice({
    name:"outputActual",
    initialState:{
    outputs:[],
    twoFirstOutputs:[],
    total:0,
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
            state.total=action.payload.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)
        },
        getOutputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
          //GET OUTPUT TWO FIRST
        getTwoFirstOutputActualStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        getTwoFirstOutputActualSuccess:(state,action)=>{
            state.isFetching=false;
            state.twoFirstOutputs=action.payload;
        },
        getTwoFirstOutputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
        //ADD OUTPUT
        addOutputActualStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        addOutputActualSuccess:(state,action)=>{
            state.isFetching=false;
            state.outputs.push(action.payload);
            state.total = action.payload.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)

        },
        addOutputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true

        },
           //LOGOUT
           outputLogout:(state)=>{
            state.outputs=[];
            state.twoFirstOutputs=[]
            state.total=0;
        }

    }
})

export const{getOutputActualStart,
             getOutputActualSuccess,
             getOutputActualFailure,
             getTwoFirstOutputActualStart,
             getTwoFirstOutputActualSuccess,
             getTwoFirstOutputActualFailure,
             addOutputActualSuccess,
             addOutputActualStart,
             addOutputActualFailure,
             outputLogout}=outputActualSlice.actions;
export default outputActualSlice.reducer 