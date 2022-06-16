import { createSlice } from "@reduxjs/toolkit";


export const expensePlanSlice = createSlice({
    name:"expensePlan",
    initialState:{
        inputsPlan:[],
        outputPlan:[],
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
            state.inputsPlan.push(action.payload);
        },
        addInputPlanFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
        // ADD INPUT PLAN NO USER
        addInputPlanPush:(state,action)=>{
            state.inputsPlan=action.payload;
        },
        // ADD OUPUT PLAN NO USER
        addOutputPlanPush:(state,action)=>{
            state.outputPlan=action.payload;
        },

    }
})

export const {addInputPlanStart,addInputPlanSuccess,addInputPlanPush,addOutputPlanPush,addInputPlanFailure}=expensePlanSlice.actions
export default expensePlanSlice.reducer
