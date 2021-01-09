import * as React from "react";
import { IPost } from "../types";

interface Props {
  meta: IPost;
}

const HeadPost: React.FC<Props> = ({ meta }) => (
  <div>
    <h1 className="great-title">{meta.title}</h1>
    <div className="details">
      <p>{meta.description}</p>
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + " min read"}
      </span>
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f39c12;
        }
        .great-title {
          font-size: 2rem;
        }
        .details span {
          color: #bdbdbd;
          margin-right: 1rem;
        }
        .details {
          margin-bottom: 1rem;
        }
      `}
    </style>
  </div>
);

export default HeadPost;
