import React from "react";
import brandImg from "../assets/images/favicon.png";

export default function Header(props) {
    return (
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
        <img className="navbar-brand logo-image ml-2" src={brandImg} alt="" />
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
              <a class="nav-link" href="#Introduction">Introduction</a>
              <a class="nav-link" href="#Timeline">Timeline</a>
              <a class="nav-link" href="#Hosts">Hosts</a>
            </div>
          </div>
          <a href="#" class="sign-up">
            <span>Sign Up</span>
          </a>
        </div>
      </nav>
    );
}
  