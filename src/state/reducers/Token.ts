import { Login } from "@/services/backend";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export  interface ITokenSlice{
    token:string | undefined,
    refreshToken:string | undefined,
    user:{}
}
export interface ILogin{
    username:string,
    password:string
}
export const login =createAsyncThunk('/user/login',async(user:ILogin) =>{
    const {data}=await Login(user);

    if(data && data.success){
        console.log("success")
        return data;
    }
    throw new Error("login failed")
})
const initialState:ITokenSlice ={
    token:undefined,
    refreshToken:undefined,
    user:{}
}
 const TokenSlice=createSlice({
    name:'tokenSlice',
    initialState: initialState,
    reducers:{

    },
    extraReducers:builder=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log(action.payload)

            state.token=action.payload?.token;
            state.refreshToken=action.payload?.refreshToken;
            state.user=action.payload?.data;
            console.log(state.user)
        })
    }
})
export default TokenSlice;