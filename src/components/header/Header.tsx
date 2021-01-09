import React from "react";
import Link from "../utility/ActiveLink";

import { HeaderWrapper, Nav } from "./Header_Style";

export default function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <h1>Next'Blog</h1>
        <div>
          <ul>
            <li>
              <Link href="/" activeClassName="active">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about" activeClassName="active">
                <a>About</a>
              </Link>
            </li>
            <li>
              <a href="/somefile.txt" download>
                Download
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    </HeaderWrapper>
  );
}
