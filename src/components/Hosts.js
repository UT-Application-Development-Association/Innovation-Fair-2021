import React from "react";
import Heading from "./Heading";
import HostCard from "./HostCard";

// Import images
// import AnonymousAvatar from "../assets/images/hosts/avatar.jpg";
import AnonymousAvatar from "../assets/images/favicon.png";
import KrisChen from "../assets/images/hosts/KrisChen.jpg";
import RavenSun from "../assets/images/hosts/RavenSun.jpg";
import DebinLi from "../assets/images/hosts/DebinLi.jpg";
import ParsaMah from "../assets/images/hosts/ParsaMah.jpeg";
import JinishaB from "../assets/images/hosts/JinishaB.png";
import KevinYan from "../assets/images/hosts/KevinYan.jpeg";
import FelixGao from "../assets/images/hosts/FelixGao.jpeg";
import AlaaYagoub from "../assets/images/hosts/AlaaYagoub.jpeg";

export default function Hosts(props) {
    return (
      <div className="container">
        <Heading text="GUESTS" />
        <div className="main-hosts-container">
          <HostCard avatar={RavenSun} name="Raven Sun" title="Tech Lead at Fintelic" />
          <HostCard avatar={DebinLi} name="Debin Li" title="Assistant Vice President - Senior Software Developer at Citi Bank" />
          <HostCard avatar={ParsaMah} name="Mah Parsa" title="Postdoctoral Researcher at CRIM, Research Project Lead at AIML" />
          <HostCard avatar={KrisChen} name="Kris Chen" title="DevOps Consultant at BMO Digital Banking" />    
          <HostCard avatar={AnonymousAvatar} name="Yusra Ai-Sharfi" title="Solution Architect at Amazon Web Service, previous Technology Specialist at Bell" />
          <HostCard avatar={JinishaB} name="Jinisha B." title="Sr. Fraud Deterrence Analyst at Scotiabank " />
          <HostCard avatar={KevinYan} name="Kevin Yan" title="Senior Developer at NielsenIQ" />
          <HostCard avatar={FelixGao} name="Felix Gao" title="Senior Business Analyst & Scrum Master at DBS Bank" />
          <HostCard avatar={AlaaYagoub} name="Alaa Yagoub" title="Tech Lead & Senior Manager at RBC" />
          <HostCard avatar={AnonymousAvatar} name="Xi Gong" title="Full Stack Developer at IBM™ AccessHub©" />
          {/* <HostCard avatar={AnonymousAvatar} name="Fengqing Yuan" title="Software Developer at Amazon" /> */}
        </div>
      </div>
    );
}
  