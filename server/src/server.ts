import { ApolloServer } from "apollo-server-express";
const express = require("express");
import { schema } from "./graphql/schema";
const mongoose = require("mongoose");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION,
});
console.log("process.env", process.env.S3_BUCKET_NAME);
const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    metadata: (req: any, file: any, cb: any) => {
      console.log("file", file);
      // console.log("req", req);
      cb(null, { fieldName: file.fieldname });
    },
    key: (req: any, file: any, cb: any) => {
      cb(null, Date.now().toString() + "-" + file.originalname); //
    },
  }),
});
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected!"))
  .catch((error: any) => console.log(error));
const server = new ApolloServer({ schema });
const app = express();

// server.applyMiddleware({ app });
app.post(
  "/upload",
  upload.fields([{ name: "file" }, { name: "id" }]),
  async (req, res) => {
    // console.log("hey");
    const request = await req;
    console.log("request", request);
    console.log("request.body", request.files.file);
  }
);
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
