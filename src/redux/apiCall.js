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
         inputLogout, } from "./inputActualRedux"
import { getOutputActualFailure,
         getOutputActualStart, 
         getOutputActualSuccess } from "./outputActualRedux"

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

