import { ApolloServer } from "apollo-server";

import resolvers from "./resolvers/index";
import typeDefs from "./type-defs/index";

const server = new ApolloServer({ resolvers, typeDefs });
server.listen().then(({ url }) => console.log(`Server ready at ${url}. `));
