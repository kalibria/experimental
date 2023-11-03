import {server} from '../msw/node';

server.listen();

const getData = async () => {
  const res =  await fetch('http://my-backend.com/mock-posts');
  return res.json();
}


export default getData;
