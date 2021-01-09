import Head from "next/head";
import Header from "../header/Header";
import * as React from "react";
import GlobalStyle from "../../styles/globalStyles";
import { Content } from "../../styles/contentStyles";

interface IProps {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
}

const Layout: React.FC<IProps> = ({ children, pageTitle, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>

      <main>
        <GlobalStyle />
        <Header />
        <Content>{children}</Content>
      </main>
    </>
  );
};

export default Layout;
