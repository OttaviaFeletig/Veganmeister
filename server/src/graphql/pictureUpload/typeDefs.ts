const { gql } = require("apollo-server");

export default gql`
  type File {
    filename: String
    mimetype: String
    encoding: String
  }
  scalar Upload
  extend type Query {
    uploads: [File]
  }
  extend type Mutation {
    singleUpload(file: Upload): File!
  }
`;
