import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";

const AboutPage: NextPage = () => (
  <>
    <h1>Welcome to About</h1>
    <p>Here is About Page</p>
    <Link href="/">
      <button>Go to Home</button>
    </Link>
  </>
);

export default AboutPage;
