// import { Post } from "../components/Post";
// import { posts } from "../getAllPosts";
import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import MobileMenu from "../components/mobilemenu/MobileMenu";

const HomePage: NextPage = () => {
  return (
    <Layout pageTitle="Blogger" description="blogger">
      <Header />
      <MobileMenu />
    </Layout>
  );
};

export default HomePage;
