import {createSlice} from "@reduxjs/toolkit"

export const outputActualSlice = createSlice({
    name:"outputActual",
    initialState:{
    outputs:[],
    twoFirstOutputs:[],
    total:0,
    isFetching1:false,
    error1:false
    },
    reducers:{
        //GET OUTPUT ALL
        getOutputActualStart:(state)=>{
            state.isFetching1=true;
            state.error1=true;
        },
        getOutputActualSuccess:(state,action)=>{
            state.isFetching1=false;
            state.outputs=action.payload;
            state.total=action.payload.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)
        },
        getOutputActualFailure:(state)=>{
            state.isFetching1=false;
            state.error1=true
        },
          //GET OUTPUT TWO FIRST
        getTwoFirstOutputActualStart:(state)=>{
            state.isFetching1=true;
            state.error1=true;
        },
        getTwoFirstOutputActualSuccess:(state,action)=>{
            state.isFetching1=false;
            state.twoFirstOutputs=action.payload;
        },
        getTwoFirstOutputActualFailure:(state)=>{
            state.isFetching1=false;
            state.error1=true
        },
        //ADD OUTPUT
        addOutputActualStart:(state)=>{
            state.isFetching1=true;
            state.error1=true;
        },
        addOutputActualSuccess:(state,action)=>{
            state.isFetching1=false;
            state.outputs.push(action.payload);
            state.total = action.payload.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)

        },
        addOutputActualFailure:(state)=>{
            state.isFetching1=false;
            state.error1=true

        },//UPDATE OUTPUT
        updateOutputActualStart:(state)=>{
            state.isFetching1=true;
            state.error1=true;
        },
        updateOutputActualSuccess:(state,action)=>{
            state.isFetching1=false;
            state.outputs[state.outputs.findIndex((item)=>item._id===action.payload.id)]=action.payload.output;
        },
        updateOutputActualFailure:(state)=>{
            state.isFetching1=false;
            state.error1=true;
        },
         //DELETE OUTPUT
         deleteOutputActualStart:(state)=>{
            state.isFetching1=false;
            state.error1=true;
        },
        deleteOutputActualSuccess:(state,action)=>{
            state.isFetching1=false;
            state.outputs.splice(
                state.outputs.findIndex((item)=>item._id===action.payload),1
            )
        },
        deleteOutputActualFailure:(state)=>{
            state.isFetching1=false;
            state.error1=true;
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
             outputLogout,
             deleteOutputActualStart,
             deleteOutputActualSuccess,
             deleteOutputActualFailure,
             updateOutputActualStart,
             updateOutputActualSuccess,
             updateOutputActualFailure}=outputActualSlice.actions;
export default outputActualSlice.reducer 