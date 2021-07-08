import React from "react";
import brandImg from "../assets/images/favicon.png";

export default function Header(props) {
    return (
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
        <img className="navbar-brand logo-image ml-2" src={brandImg} alt="" />
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <a className="nav-link" href="#timeline">Timeline</a>
              <a className="nav-link" href="#guests">Guests</a>
              <a className="nav-link" href="#sponsors">Sponsors</a>
              <a className="nav-link" href="#FAQ">FAQs</a>
              <a className="nav-link" href="https://if2020.uoftada.com/" target="_blank" rel="noreferrer">IF2020</a>
            </div>
          </div>
          <a href="https://www.wjx.cn/vm/toPi2x3.aspx" className="sign-up" target="_blank" rel="noreferrer">
            <span>Sign Up</span>
          </a>
        </div>
      </nav>
    );
}
  