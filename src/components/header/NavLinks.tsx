import React from "react";
import Link from "../utility/ActiveLink";

const NavLinks = () => {
  const handleDropdownStatus = (e: any) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box">
      <li className="dropdown">
        <Link href="/">
          <>
            <a>Home</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/">
              <a>Home One</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>Home Two</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/blog" activeClassName="active">
          <a>Blog</a>
        </Link>
      </li>

      <li className="dropdown">
        <Link href="/news">
          <>
            <a>News</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
