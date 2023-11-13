'use client'
import React, { useEffect, useState} from 'react'
import {paginate} from 'src/app/posts/paginate';
import Pagination from 'src/app/posts/Pagination';
import styles from './Page.module.css'

export interface IPosts {
  id: number,
  title: string,
  content: string,
  userId: number
}


const PostsList =  () =>{
  const [posts, setPosts] = useState<IPosts[]>([])

  useEffect(() =>{
    const getPosts = async ()=> {
      const posts = await fetch("http://localhost:3001/posts",{ cache: 'no-store' });

      const res = await posts.json();

      setPosts(res)

    }

    getPosts()
  }, [])


  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) =>{
    paginate(posts, currentPage, pageSize);
    setCurrentPage(page)
  }

  const paginatedPosts = paginate(posts, currentPage, pageSize);



  const postData = paginatedPosts.map((posts) => {
    return <tr key={posts.id}>
      <td>{posts.title}</td>
      <td>{posts.content}</td>
    </tr>
  })

  return (

    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
        </tr>
        </thead>

        <tbody>
        {postData}

        </tbody>

      </table>

      <Pagination items={posts.length} // 50
                   currentPage={currentPage} // 1
                   pageSize={pageSize} // 10
                   onPageChange={onPageChange}
      />

  </div>

  )
}

export default PostsList
