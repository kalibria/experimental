import {IPosts} from 'src/app/posts/page';



const getDataForPagination = ({posts}: IPosts[]) =>{


  const items =  posts.length;
  const pageSize = 10;
  const totalPages = Math.ceil(items / pageSize)

  const data = {items, pageSize, totalPages};

  return data;
}

export default getDataForPagination;
