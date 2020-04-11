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
      console.log("req", req);
      cb(null, { fieldName: file.fieldname });
    },
    key: (req: any, file: any, cb: any) => {
      cb(null, Date.now().toString() + "-" + file.originalname); //
    },
  }),
});

export const resolvers = {
  // Query: {
  //   files: () => {
  //     // Return the record of files uploaded from your DB or API or filesystem.
  //   },
  // },
  Mutation: {
    async singleUpload(parent, { file }) {
      try {
        const { createReadStream, filename, mimetype, encoding } = await file;
        // console.log("stream", createReadStream);
        if (file) {
          const stream = createReadStream();
          // 1. Validate file metadata.

          // 2. Stream file contents into cloud storage:
          // https://nodejs.org/api/stream.html

          // 3. Record the file upload in your DB.
          // const id = await recordFile( … )
          // return { filename, mimetype, encoding };

          // const uploadedPic = await upload.single("image");

          // console.log("uploadedPic", uploadedPic);
        }
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
