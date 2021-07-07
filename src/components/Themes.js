import React from 'react';
import Heading from "./Heading";
import mentalhealth from '../assets/images/health.jpg';
import organization from '../assets/images/organization.jpg';
import community from '../assets/images/community.jpg';

function Themes() {
  // mental and physical health
  // productivity and organization
  // community building
  return (
    <div className="themes-container container">
      <Heading text="2021 THEMES" />
      <div className="themes-intro mx-auto my-2 col-md-8 col-12">
        <p>
          Innovation Fair 2021 is returning with a theme of Post-Pandemic Era. United by our
          identity as UofT students, Innovation Fair 2021 seeks to expand the boundary of personal
          well-being, enhance the experience of communal living, and initiate a dialogue between
          individual students and the campus we live in.
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
              Mental and Physical Health
              focuses on providing technical solutions to help integrate and enhance post-pandemic
              individual’s well-being.
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
              Productivity and Organization seeks to find technical solutions that
              not only enhances individual student’s productivity but also expands to the wider student
              community.
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
              Community Building asks our participants to provide technical solutions that
              help our college transition better in post-pandemic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Themes;
