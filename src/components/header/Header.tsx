import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const AuthMenu = dynamic(() => import("../auth/auth-menu"), { ssr: false });

import NavLinks from "./NavLinks";
// import AuthMenu from "../auth/auth-menu";
import Router from "next/router";
import { AuthContext } from "../../contexts/auth/auth.context";
// import { Modal } from "../modal/modal";
// import { useModal } from "../modal/useModal";

// import SignInForm from "../../features/authentication-form/login";
import headerLogo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);

  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      authDispatch({ type: "SIGN_OUT" });
      Router.push("/");
    }
  };

  const handleJoin = () => {
    authDispatch({
      type: "SIGNIN",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      mobileMenu();
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const mobileMenu = () => {
    let x = document.querySelector(".side-menu__toggler");
    x?.addEventListener("click", function (e: Event) {
      let y = document.querySelector(".side-menu__block");
      y?.classList.toggle("active");
      e.preventDefault();
    });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e: Event) {
        let z = document.querySelector(".side-menu__block");
        z?.classList.remove("active");
        e.preventDefault();
      });
    });
  };

  return (
    <header className={`header`}>
      <div
        className={`main-header ${sticky === true ? "sticky fadeInDown" : " "}`}
      >
        <div className="main-menu-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="logo">
                  <a href="/">
                    <img src={headerLogo} alt="jironis" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-4 col-6 menu-button">
                <div className="menu--inner-area clearfix">
                  <div className="menu-wraper">
                    <nav>
                      <div className="header-menu">
                        <div
                          id="menu-button"
                          className="menu-opened side-menu__toggler"
                        >
                          <i className="fa fa-bars"></i>
                        </div>
                        <NavLinks />
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5 d-md-block d-none">
                <div className="urgent-call text-right">
                  {/* <a className="btn">
                    Get Jironis
                  </a> */}
                  <AuthMenu
                    isAuthenticated={isAuthenticated}
                    onJoin={handleJoin}
                    onLogout={handleLogout}
                    avatar={headerLogo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
