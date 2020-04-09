import PostModel from "../../models/Post";

export const addPost = async (
  id,
  mainPicture,
  pictures,
  author,
  title,
  postSections,
  hashtags,
  published,
  archived
) => {
  console.log(id);
  const newPost = new PostModel({
    date: new Date(),
    restaurant: id,
    mainPicture,
    pictures,
    author,
    likes: 0,
    title,
    postSections,
    hashtags,
    comments: [],
    published,
    archived,
    rating: 0,
  });
  const savedPost = await newPost.save();
  const populatedPost = await savedPost
    .populate({
      path: "restaurant",
      populate: { path: "restaurant", model: "restaurant" },
    })
    .execPopulate();
  return populatedPost;
};
