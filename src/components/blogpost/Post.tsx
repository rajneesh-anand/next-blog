import Link from "next/link";

const Post = ({ post }: any) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div className="single-blog-inner">
      <div className="post-content">
        <div className="post-details">
          <div className="post-title">
            <h3>
              <Link href={"/blog" + link}>
                <a>{meta.title}</a>
              </Link>
            </h3>
          </div>
          <div className="post-info d-flex">
            <span>{meta.date}</span>
            <span role="img" aria-label="one coffee">
              ☕ {meta.readTime + " min read"}
            </span>
          </div>
          <p>{meta.description}</p>
          <Link href={"/blog" + link}>
            <a className="btn">Read more</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
