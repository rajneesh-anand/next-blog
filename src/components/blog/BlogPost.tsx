import Link from "next/link";

const BlogPost = ({ post }: any) => {
  const {
    link,
    module: { meta },
  } = post;
  return (
    <div className="single-blog-inner">
      <div className="post-image">
        <Link href={"/blog" + link}>
          <a>
            <img src={meta.image} alt="" />
          </a>
        </Link>

        <div className="post-date">
          <p>
            <span>{meta.date}</span>
          </p>
        </div>
      </div>

      <div className="post-content">
        <div className="post-details">
          <div className="post-info d-flex">
            <Link href={"/blog" + link}>
              <a>☕ {meta.readTime + " minutes read"}</a>
            </Link>
          </div>
          <div className="post-title">
            <h3>
              <Link href={"/blog" + link}>
                <a>{meta.title}</a>
              </Link>
            </h3>
          </div>
          <p>{meta.description}</p>
          <Link href={"/blog" + link}>
            <a className="blog-btn">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
