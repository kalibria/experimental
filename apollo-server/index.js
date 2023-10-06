import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';




//db
import db from './_db.js'


//types
import {typeDefs} from './schema.js';

const resolvers = {
  Query: {
    games(){
      return db.games
    },
    game(_,args){
      return db.games.find((games) => games.id === args.id)
    },
    authors(){
      return db.authors
    },
    author(_,args){
      return db.authors.find((authors) => authors.id === args.id)
    },
    reviews(){
      return db.reviews
    },
    review (_,args){
      return db.reviews.find((review) => review.id === args.id)
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




