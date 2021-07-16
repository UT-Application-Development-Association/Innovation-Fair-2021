import React from "react";
import Heading from "./Heading";

import chinaTelecom from "../assets/images/sponsors/china_telecom.png";
import fintelics from "../assets/images/sponsors/fintelics.png";
import kollection from "../assets/images/sponsors/kollection.png";

export default function Sponsors(props) {
  return (
    <div className="sponsors-container container">
      <Heading text="SPONSORS" />
      <div className="sponsors">
        <div className="sponsor">
          <img src={kollection} alt="kollection" />
        </div>
        <div className="sponsor">
          <img src={chinaTelecom} alt="China Telecom" />
        </div>
        <div className="sponsor">
          <img src={fintelics} alt="fintelics" />
        </div>
      </div>
    </div>
  );
}
