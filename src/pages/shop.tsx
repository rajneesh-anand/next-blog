import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import MobileMenu from "../components/mobilemenu/MobileMenu";
import Footer from "../components/footer/Footer";

const HomePage: NextPage = () => {
  return (
    <Layout pageTitle="Blogger Shop" description="Shop">
      <Header />
      <MobileMenu />

      <Footer />
    </Layout>
  );
};

export default HomePage;
