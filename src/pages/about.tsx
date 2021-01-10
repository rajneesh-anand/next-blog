import * as React from "react";
import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import MobileMenu from "../components/mobilemenu/MobileMenu";

const AboutPage: NextPage = () => {
  return (
    <Layout pageTitle="About" description="about blogger">
      <Header />
      <MobileMenu />
      <h1>ABOUT</h1>
    </Layout>
  );
};

export default AboutPage;
