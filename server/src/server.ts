import { ApolloServer } from "apollo-server";
import { schema } from "./graphql/schema";
const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected!"))
  .catch((error: any) => console.log(error));
const server = new ApolloServer({ schema });
server.listen().then(({ url }) => console.log(`Server ready at ${url}. `));
