import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
const PostList = () => {
    const Posts= useSelector(selectAllPosts)

    const renderdPost= Posts.map((post)=>(
        <div key={post.id}>
             <h3>{post.title}</h3>
             <p>{post.content}</p>
             <p><PostAuthor userId={post.userId}/> <TimeAgo timestamp={post.date}/></p>
        </div>
    ))
  return (
    <div>
           <h2>Posts</h2>
             {renderdPost}
    </div>
  )
}

export default PostList

