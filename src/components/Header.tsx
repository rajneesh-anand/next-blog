import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <nav>
      <h1>Next'Blog</h1>
      <div>
        <ul>
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li className={router.pathname == "/about" ? "active" : ""}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
        ul {
          list-style-type: none;
          display: flex;
        }
        .active a {
          color: red;
        }
      `}</style>
    </nav>
  );
}
