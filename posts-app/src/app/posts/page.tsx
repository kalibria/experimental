import React from 'react'


const PostsList = async () =>{

  const posts = await fetch("http://localhost:3001/posts");

  const res = await posts.json();
  console.log("posts", res)

  return <div>
    <h1>Posts List</h1>
  </div>
}

export default PostsList
