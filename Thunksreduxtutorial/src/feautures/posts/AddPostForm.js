import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/userSlice';
const AddPostForm = () => {
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
     const [userId,setUserId]=useState('');

     const users= useSelector(selectAllUsers);
    const userOption=users.map(user =>(
        <option key={user.id} value={user.id}>
                {user.name}
        </option>
    ))
    const dispatch=useDispatch()

    const hangleTitleChange=(e)=>{
             setTitle(e.target.value);
            //  console.log(e.target.value)
             e.preventDefault();
    }
    const hangleContentChange= (e)=>{
        setContent(e.target.value);
        // console.log(e.target.value)
        e.preventDefault();
    }
    const onauthorchange=(e)=>{
            setUserId(e.target.value)
            console.log(e.target.value);
    }
    const handlesubmit =(e)=>{
         
        if(title && content){
                 dispatch(postAdded(title,content,userId))

                 console.log(content+ " " + title);
        }
       setTitle('');
       setContent('');

        e.preventDefault();

    }
  return (
    <div>
          <form onSubmit={handlesubmit}>
                 <input placeholder='title' value={title} onChange={hangleTitleChange}/>
                 <input placeholder='content' value={content} onChange={hangleContentChange}/>
                   <select id="postauthor" value={userId} onChange={onauthorchange}>
                       <option value="">

                       </option>
                      {userOption}
                   </select>
                 <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default AddPostForm
