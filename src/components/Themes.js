import React from 'react';
import mentalhealth from '../assets/images/health.jpg';
import organization from '../assets/images/organization.jpg';
import community from '../assets/images/community.jpg';

function Themes() {
  // mental and physical health
  // productivity and organization
  // community building
  return (
    <div className="Themebox">
      <h1>Themes: Post-Pandemic Era</h1>
      <div className="Themes">
        <div className="ThemeA">
            <img className="HoverImage" src={mentalhealth} alt="health" />
          <div id="Atitle"> 
            <p>Mental and Physical Health</p>
          </div>
        </div>
        
        <div className="ThemeB">
            <img className="HoverImage" src={organization} alt="org" />
          <div id="Btitle">
            <p>Productivity and Organization</p>
          </div>
        </div>
        <div className="ThemeC">
            <img className="HoverImage" src={community} alt="comm" />
          <div id="Ctitle"> 
            <p>Community Building</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Themes;
