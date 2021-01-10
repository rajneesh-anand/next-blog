import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";

interface IProps {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
}

const Layout: React.FC<IProps> = ({ children, pageTitle, description }) => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700"
          rel="stylesheet"
        />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>

      <main>
        <div className="page-wrapper" id="wrapper">
          {children}
        </div>
        {scrollTop === true ? (
          <div className="back-to-top show" style={{ cursor: "pointer" }}>
            <ScrollLink
              to="wrapper"
              smooth={true}
              duration={500}
              className="scroll-to-top"
            >
              <i className="fa fa-chevron-up"></i>
            </ScrollLink>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default Layout;
