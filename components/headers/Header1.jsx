"use client";
import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import Categories from "./Categories";
import MobileNav from "./MobileNav";
export default function Header1() {
  return (
    <header id="header_main" className="header">
      <div className="header-inner">
        <div className="header-inner-wrap">
          <div className="header-left flex-grow">
            <a
              className="mobile-nav-toggler mobile-button d-lg-none flex"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            />
            <div id="site-logo">
              <Link href={`/`} rel="home">
                <Image
                  id="logo-header"
                  alt=""
                  src="/Logo-01.svg"
                  width={123}
                  height={36}
                />
              </Link>
            </div>

          </div>
          <div className="header-right">
            <nav className="main-menu">
              <ul className="navigation">
                <Nav />
              </ul>
            </nav>
            {/* <a
              className="d-lg-none flex"
              href="#canvasSearch"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasLeft"
            >
              <i className="icon-search fs-20" />
            </a> */}

            <div className="header-btn flex gap-10">
              <div className="header-login">
                <Link href={`/login`} className="tf-button-default header-text">
                  Log In
                </Link>
              </div>
              <div className="header-register">
                <Link
                  href={`/register`}
                  className="tf-button-default active header-text"
                >
                  Sign Up
                </Link>
              </div>
              {/* <div className="d-lg-none flex">
                <Link href={`/login`} className="fs-15">
                  Join
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
