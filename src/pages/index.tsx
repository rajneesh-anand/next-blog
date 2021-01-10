import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import MobileMenu from "../components/mobilemenu/MobileMenu";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { posts } from "../getAllPosts";
import Post from "../components/blogpost/Post";

const HomePage: NextPage = () => {
  return (
    <Layout pageTitle="Blogger" description="blogger">
      <Header />
      <MobileMenu />
      <Banner />
      <section className="pt-120 pb-150">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-list-inner">
                {posts.map((post: any) => (
                  <Post key={post.link} post={post} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default HomePage;
