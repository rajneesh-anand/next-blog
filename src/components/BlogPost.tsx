import HeadPost from "./HeadPost";
import * as React from "react";
import { IPost } from "../types";

interface Props {
  meta: IPost;
  children: React.ReactNode;
}

const BlogPost: React.FC<Props> = ({ children, meta }) => {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
};
export default BlogPost;
