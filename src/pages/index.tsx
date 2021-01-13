import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import MobileMenu from "../components/mobilemenu/MobileMenu";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import BlogHome from "../components/blog";

const HomePage: NextPage = () => {
  return (
    <Layout pageTitle="Blogger" description="blogger">
      <Header />
      <MobileMenu />
      <Banner />
      <BlogHome />
      <Footer />
    </Layout>
  );
};

export default HomePage;
