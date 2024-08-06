import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    id:'0',
    name:'harsha'
},{
    id:'1',
    name:'pammi'
},{
    id:'2',
    name:'abhinay'
}]

const userSlice=createSlice({
       name :'user',
       initialState,
       reducers:{}
})
export const selectAllUsers=(state)=> state.user

export default userSlice.reducer
