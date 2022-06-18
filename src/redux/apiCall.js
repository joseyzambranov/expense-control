import {loginStart,
        loginFailure,
        loginSuccess,
        logout} from "./userRedux"
import {privateRequest, publicRequest} from "../requestMethods.js"
import { addInputActualFailure, 
         addInputActualStart, 
         addInputActualSuccess, 
         getInputActualFailure,
         getInputActualStart, 
         getInputActualSuccess,
         getTwoFirstInputActualStart,
         getTwoFirstInputActualSuccess,
         getTwoFirstInputActualFailure,
         inputLogout,
         deleteInputActualStart,
         deleteInputActualSuccess,
         deleteInputActualFailure, } from "./inputActualRedux"
import { getOutputActualFailure,
         getOutputActualStart, 
         getOutputActualSuccess,
         getTwoFirstOutputActualStart,
         getTwoFirstOutputActualSuccess,
         getTwoFirstOutputActualFailure, 
         addOutputActualStart,
         addOutputActualSuccess,
         addOutputActualFailure,
         outputLogout,
         deleteOutputActualStart,
         deleteOutputActualSuccess,
         deleteOutputActualFailure
       } from "./outputActualRedux"
import { addInputPlanFailure, addInputPlanPush, addInputPlanStart, addInputPlanSuccess, addInputTotalPush, addOutputPlanPush, addOutputPlanTtotalPush, getInputPlanFailure, getInputPlanStart, getInputPlanSuccess } from "./expensePlanRedux"

/*------------------------------USER------------------------------------*/

//LOGIN

export const login = async (dispatch,user)=>{

    dispatch(loginStart())
    try{

        const res=await publicRequest.post("auth/login",user)
        dispatch(loginSuccess(res.data))

    }catch(err){
        dispatch(loginFailure())
    }
}

//LOGOUT USER

export const logoutuser = (dispatch)=>{
    dispatch(logout())
}

/*-----------------------------------INPUT--------------------------------------- */

//GET INPUT ACTUAL

export const getInputActual = async(dispatch , id)=>{
 dispatch(getInputActualStart())
 try{
    const res= await privateRequest.get(`input/find/${id}`)
    dispatch(getInputActualSuccess(res.data))
 }catch(err){
    dispatch(getInputActualFailure())
 }   
}

//GET TWO FIRST INPUT ACTUAL

export const getTwoFirstInputActual = async(dispatch , id)=>{
    dispatch(getTwoFirstInputActualStart())
    try{
       const res= await privateRequest.get(`input/start/${id}`)
       dispatch(getTwoFirstInputActualSuccess(res.data))
    }catch(err){
       dispatch(getTwoFirstInputActualFailure())
    }   
   }

//ADD INPUT

export const addInputActual = async(dispatch,input)=>{
    dispatch(addInputActualStart())
    try{

        const res = await privateRequest.post(`input/`,input)
        dispatch(addInputActualSuccess(res.data))


    }catch(err){
        dispatch(addInputActualFailure())
    }
}
//DELETE INPUT
export const deleteInputActual = async(id,dispatch)=>{
    dispatch(deleteInputActualStart())
    try{
        const res = await privateRequest.delete(`input/${id}`)
        dispatch(deleteInputActualSuccess(res))
    }catch(err){
        dispatch(deleteInputActualFailure())
    }
}

//LOGOUT INPUT

export const logoutInputActual = (dispatch)=>{
    dispatch(inputLogout())
}

/*-----------------------------------OUTPUT--------------------------------------- */

//GET OUTPUT ACTUAL

export const getOutputActual = async(dispatch , id)=>{
    dispatch(getOutputActualStart())
    try{
       const res= await privateRequest.get(`output/find/${id}`)
       dispatch(getOutputActualSuccess(res.data))
    }catch(err){
       dispatch(getOutputActualFailure())
    }   
   }

   //GET TWO FIRST OUTPUT ACTUAL

   export const getTwoFirstOutputActuaL = async(dispatch , id)=>{
    dispatch(getTwoFirstOutputActualStart())
    try{
       const res= await privateRequest.get(`output/start/${id}`)
       dispatch(getTwoFirstOutputActualSuccess(res.data))
    }catch(err){
       dispatch(getTwoFirstOutputActualFailure())
    }   
   }

   //ADD OUTPUT

export const addOutputActual = async(dispatch,input)=>{
    dispatch(addOutputActualStart())
    try{

        const res = await privateRequest.post(`output/`,input)
        dispatch(addOutputActualSuccess(res.data))


    }catch(err){
        dispatch(addOutputActualFailure())
    }
}
//DELETE OUTPUT
export const deleteOutputActual = async(id,dispatch)=>{
    dispatch(deleteOutputActualStart())
    try{
        const res = await privateRequest.delete(`output/${id}`)
        dispatch(deleteOutputActualSuccess(res))
    }catch(err){
        dispatch(deleteOutputActualFailure())
    }
}
//LOGOUT OUTPUT

export const logoutOutputActual = (dispatch)=>{
    dispatch(outputLogout())
}
/*-----------------------------EXPENSE PLAN--------------------------------------*/
//ADD INPUT PLAN NO USER

export const addInputplan =(dispatch,input)=>{
    dispatch(addInputPlanPush(input))
}

//ADD INPUT TOTAL NO USER

export const addInputTotal = (dispatch,inputTotal)=>{
    dispatch(addInputTotalPush(inputTotal))
}

//ADD OUTPUT PLAN  NO USER

export const addOutputplan =(dispatch,output)=>{
    dispatch(addOutputPlanPush(output))
}

//ADD OUTPUT PLAN TOTAL NO USER
export const addOutputPlanTotal =(dispatch,outputTotal)=>{
    dispatch(addOutputPlanTtotalPush(outputTotal))
}

//GET INPUT PLAN

export const getInputPlan = async(dispatch, id)=>{
    dispatch(getInputPlanStart())
    try{
        const res= await privateRequest.get(`inputPlan/find/${id}`)
        dispatch(getInputPlanSuccess(res.data))
    }catch(err){
        dispatch(getInputPlanFailure())
    }
}

//ADD INPUT PLAN

export const addInputPlan = async (dispatch,inputPlan)=>{
    dispatch(addInputPlanStart())
    try{
        const res = await privateRequest.post("inputPlan/",inputPlan)
        dispatch(addInputPlanSuccess(res.data))

    }catch(err){
        dispatch(addInputPlanFailure())
    }
}
