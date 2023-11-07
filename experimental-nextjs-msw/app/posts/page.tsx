import getData from 'app/posts/getData';
import React from 'react'



const PostsList = async () => {
 const {posts} = await getData();

 console.log("posts", posts)
  const postsList = posts.map((post)=>{
    return <tr key={post.id}>
     <th >{post.title}</th>
     <th>{post.content}</th>
    </tr>
  })
  return <div>
   <table>
    <thead>
     <tr>
      <th>Title</th>
      <th>Description</th>
     </tr>
    </thead>
    <tbody>
    {postsList}
    </tbody>
   </table>
  </div>
}

export default PostsList
