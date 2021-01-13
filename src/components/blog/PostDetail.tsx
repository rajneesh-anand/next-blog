import * as React from "react";
import { IPost } from "../../types";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import MobileMenu from "../mobilemenu/MobileMenu";
import { Container, Row, Col } from "react-bootstrap";

interface Props {
  meta: IPost;
  children: React.ReactNode;
}

const PostDetail: React.FC<Props> = ({ children, meta }) => {
  return (
    <Layout pageTitle={meta.title} description={meta.description}>
      <Header />
      <MobileMenu />
      <section className="pt-120 pb-150">
        <Container>
          <Row>
            <Col lg={12}>
              <div>{children}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="post-tag-share d-flex align-items-center">
                <div className="post-tag">
                  <h5>Tags:</h5>
                  {meta.tags.map((tag, index) => (
                    <a key={index} href="#">
                      {tag},
                    </a>
                  ))}
                </div>
                <div className="post-share">
                  <ul className="social-list mb--0 list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default PostDetail;
