import { createSlice } from "@reduxjs/toolkit";


export const expensePlanSlice = createSlice({
    name:"expensePlan",
    initialState:{
        inputsPlan:[],
        inputPlanTotal:[],
        outputPlan:[],
        outputPlanTotal:[],
        isFetching:false,
        error:false
    },
    reducers:{
        // ADD INPUT PLAN
        addInputPlanStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        addInputPlanSuccess:(state,action)=>{
            state.isFetching=false;
            state.inputsPlan=action.payload;
        },
        addInputPlanFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
        // ADD INPUT PLAN NO USER
        addInputPlanPush:(state,action)=>{
            state.inputsPlan=action.payload;
        },
        //ADD INPUT TOTAL NO USER
        addInputTotalPush:(state,action)=>{
            state.inputPlanTotal=action.payload;
        },
        // ADD OUPUT PLAN NO USER
        addOutputPlanPush:(state,action)=>{
            state.outputPlan=action.payload;
        },
        //ADD OUTPUT TOTAL NO USER
        addOutputPlanTtotalPush:(state,action)=>{
            state.outputPlanTotal=action.payload;
        },
        //GET INPUT PLAN
        getInputPlanStart:(state)=>{
            state.isFetching=true;
            state.error=true;
        },
        getInputPlanSuccess:(state,action)=>{
            state.isFetching=false;
            state.inputsPlan=action.payload;
        },
        getInputPlanFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        }

    }
})

export const {

              addInputPlanStart,
              addInputPlanSuccess,
              addInputPlanPush,
              addOutputPlanPush,
              addInputPlanFailure,
              getInputPlanStart,
              getInputPlanSuccess,
              getInputPlanFailure,
              addInputTotalPush,
              addOutputPlanTtotalPush
            
            }=expensePlanSlice.actions
export default expensePlanSlice.reducer
