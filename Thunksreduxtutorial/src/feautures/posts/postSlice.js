import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState=[{
    id :'1',
    title:'Learnig Redux toolkit',
    content:'i have heard good things about redux',
    date:sub(new Date(),{minutes: 10}).toISOString()
},{
    id :'2',
    title:'Learnig Redux toolkit and react',
    content:'i have heard good things about redux and react',
    date:sub(new Date(),{minutes: 10}).toISOString() 
}]

export const postSlice=createSlice({
       name:'posts',
       initialState,
       reducers:{
           postAdded : {
                 reducer(state,action){
                         state.push(action.payload)
                 },
                 prepare(title,content,userId)
                 {
                      return{
                           payload:{
                               id:nanoid(),
                               title,
                               content,
                               date: new Date().toISOString(),
                               userId
                           }
                      }
                 }
           }
       }
})
export const selectAllPosts= (state)=> state.posts
export const {postAdded}=postSlice.actions
export default postSlice.reducer