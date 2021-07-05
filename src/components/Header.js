import React from "react";

export default function Header(props) {
    return (
      <nav className="navbar-section">
        <a className="logo-container" href="https://www.google.ca/">
          <img className="logo-image" src="" alt='Innovation Fair'/>
        </a>
        <ul className="button-container">
          <li className="jianjie" href="">简介</li>
          <li className="shijian" href="#timeline">时间线</li>
          <li className="pingshen" href="">评审</li>
          <li className="gonggao" href="">公告</li>
          <li className="baoming" href="">报名！</li>
        </ul>
      </nav>
    );
}
  