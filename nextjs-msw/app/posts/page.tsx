import getData from 'app/posts/getData';
import React from 'react'



const PostsList = async () => {
 const {posts} = await getData();

 console.log("posts", posts)
  const postsList = posts.map((post)=>{
    return <li key={post.id}>{post.title}</li>



  })
  return <div>
    {postsList}
  </div>
}

export default PostsList
