import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"User",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false,
    },
    reducers:{
        //LOGIN
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        //LOGOUT
        logout:(state)=>{
            state.currentUser=null;
        }

    }
})
export const {userNologin,loginStart,loginSuccess,loginFailure,logout} =userSlice.actions;
export default userSlice.reducer;