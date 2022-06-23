import {createSlice} from "@reduxjs/toolkit"

export const inputActualSlice = createSlice({
    name:"inputActual",
    initialState:{
    inputs:[],
    twoFirstInputs:[],
    inputFilter:"JUNE 2022",
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
        //UPDATE
        updatInputActualStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        updateInputActualSuccess:(state,action)=>{
            state.isFetching=false;
            state.inputs[state.inputs.findIndex((item)=>item._id===action.payload.id)]=action.payload.input
            ;
        },
        updateInputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        //DELETE INPUT
        deleteInputActualStart:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        deleteInputActualSuccess:(state,action)=>{
            state.isFetching=false;
            state.inputs.splice(
                state.inputs.findIndex((item)=>item._id===action.payload),1
            )
        },
        deleteInputActualFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
         //LOGOUT
         inputLogout:(state)=>{
            state.inputs=[];
            state.twoFirstInputs=[]
            state.total=0;
        },
        //ADD FILTER INPUT
        inputFilterActual:(state,action)=>{
            state.inputFilter=action.payload;
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
             inputLogout,
             deleteInputActualStart,
             deleteInputActualSuccess,
             deleteInputActualFailure,
             updatInputActualStart,
             updateInputActualSuccess,
             updateInputActualFailure,
             inputFilterActual
                                    }=inputActualSlice.actions;
export default inputActualSlice.reducer 