import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogPost from "./BlogPost";
import SectionTitle from "../utility/SectionTitle";
import { posts } from "../../getAllPosts";

// import img1 from "../assets/img/blog/blog1.png";
// import img2 from "../assets/img/blog/blog2.png";
// import img3 from "../assets/img/blog/blog3.png";

const BlogHome = () => {
  return (
    <section className="border-top pt-115 pb-80" id="blog">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={8}>
            <SectionTitle
              title="Our News & Articles"
              text="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt    mollit lorem ipsum anim id est laborum perspiciatis unde."
            />
          </Col>
        </Row>
        <Row>
          {posts.map((post: any, index: any) => (
            <Col md={4} lg={4} key={`blog-post-${index}`}>
              <BlogPost post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
