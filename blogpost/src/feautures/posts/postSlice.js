import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=[{
    id :'1',
    title:'Learnig Redux toolkit',
    content:'i have heard good things about redux'
},{
    id :'2',
    title:'Learnig Redux toolkit and react',
    content:'i have heard good things about redux and react' 
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