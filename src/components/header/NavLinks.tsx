import React from "react";
import Link from "../utility/ActiveLink";

const NavLinks = () => {
  const handleDropdownStatus = (e: any) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog" activeClassName="active">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/about" activeClassName="active">
          <a>About</a>
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
      <li>
        <Link href="/shop" activeClassName="active">
          <a>Shop</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
