import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      {posts.map((post: any) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
};
export default IndexPage;
