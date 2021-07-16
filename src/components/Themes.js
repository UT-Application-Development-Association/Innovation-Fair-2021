import React from "react";
import Heading from "./Heading";
import mentalhealth from "../assets/images/health.jpg";
import organization from "../assets/images/organization.jpg";
import community from "../assets/images/community.jpg";

function Themes() {
  // mental and physical health
  // productivity and organization
  // community building
  return (
    <div className="themes-container container">
      <Heading text="2021 THEMES" />
      <div className="themes-intro mx-auto my-2 col-md-8 col-12">
        <p>
          Innovation Fair 2021 is returning with a theme of <strong>Post-Pandemic Era</strong>. We seeks to expand 
          the boundary of personal well-being, enhance the experience of communal living, and 
          initiate a dialogue between individual students and the community we live in.
        </p>
      </div>

      <div className="themes mx-auto">
        <div className="theme-1 theme-item">
          <div className="img-container">
            <img className="theme-img" src={mentalhealth} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Mental and Physical Health</h5>
            <p>
            Self-isolation challenges our ability to keep mental and physical health by changing our daily routines and disrupting our internal and external balance. How can technical solutions help protect us from physical illness as well as re-balancing our internal well-being?
            </p>
          </div>
        </div>

        <div className="theme-2 theme-item">
          <div className="img-container">
            <img className="theme-img" src={organization} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Productivity and Organization</h5>
            <p>
            Working and studying from home provided us with a unique experience that can be both difficult and revolutionary. How should technology be utilized to ensure personal organization and assert individual’s sense of control against the irregularities posed by the pandemic?
            </p>
          </div>
        </div>
        <div className="theme-3 theme-item">
          <div className="img-container">
            <img className="theme-img" src={community} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Community Building</h5>
            <p>
            Our family, friends, and communities have firmly stood by our side during the pandemic. As our community is heading towards its post-pandemic normality, how can we help to ensure its smooth transition into the new reunion?
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Themes;
