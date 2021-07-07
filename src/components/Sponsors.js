import React from "react";
import Heading from "./Heading";

import chinaTelecom from "../assets/images/sponsors/china_telecom.png";

export default function Sponsors(props) {
    return (
      <div className="sponsors-container container">
        <Heading text="SPONSORS" />
        <div className="sponsors">
            <img className="sponsor" src={chinaTelecom} alt="China Telecom" />
            <img className="sponsor" src={chinaTelecom} alt="China Telecom" />
            <img className="sponsor" src={chinaTelecom} alt="China Telecom" />
            <img className="sponsor" src={chinaTelecom} alt="China Telecom" />
        </div>
      </div>
    );
}
  