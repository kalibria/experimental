const getPosts = async () => {
  const posts = await fetch("http://localhost:3001/posts",{ cache: 'no-store' });

  const res = await posts.json();

  return res;
}

export default getPosts;
