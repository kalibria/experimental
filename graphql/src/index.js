import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';




//db
import db from './_db.js'


//types
import {typeDefs} from './schema';

const resolvers = {
  Query: {
    games(){
      return db.games
    },
    authors(){
      return db.authors
    },
    reviews(){
      return db.reviews
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

const {url} = await  startStandaloneServer(server,{
  listen: {port:3000}
})



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/*<App />*/}
//   </React.StrictMode>
// );



