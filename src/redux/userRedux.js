import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"User",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false,
        tutorial:true,
        translate:true,
    },
    reducers:{
        //LOGIN
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
            state.error=false;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        //LOGOUT
        logout:(state)=>{
            state.currentUser=null;
        },//GERISTER
        registerStart:(state)=>{
            state.isFetching=true;
        },
        registerSuccess:(state,action)=>{
            state.isFetching=false;
            //state.currentUser=action.payload;
            state.error=false;
        },
        registerFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },//TUTORIAL
        tutorialFalse:(state)=>{
            state.tutorial=false;
        },
        tutorialTrue:(state)=>{
            state.tutorial=true;
        },//TRANSLATE
        translateFalse:(state)=>{
            state.translate=false;
        },
        translateTrue:(state)=>{
            state.translate=true;
        },

    }
})
export const {
              userNologin,
              loginStart,
              loginSuccess,
              loginFailure,
              logout,
              registerStart,
              registerSuccess,
              registerFailure,
              tutorialFalse,
              tutorialTrue,
              translateFalse,
              translateTrue  } =userSlice.actions;
              
export default userSlice.reducer;