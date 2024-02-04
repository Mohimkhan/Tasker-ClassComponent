import React, { Component } from "react";

import Logo from "../assets/lws-logo-en.svg";
import Image from "./Image";
import Link from "./Link";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <Link to="/">
            <Image className="h-[45px]" imgSrc={Logo} altText="Lws" />
          </Link>
        </div>
      </nav>
    );
  }
}
