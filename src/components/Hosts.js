import React from "react";
import Heading from "./Heading";
import HostCard from "./HostCard";

// Import images
import AnonymousAvatar from "../assets/images/hosts/avatar.jpg";

export default function Hosts(props) {
    return (
      <div className="container">
        <Heading text="HOSTS" />
        <div className="main-hosts-container">
          <HostCard avatar={AnonymousAvatar} name="Kevin Yan" title="Senior Developer at Nielseniq" />
          <HostCard avatar={AnonymousAvatar} name="Fengqing Yuan" title="Software Developer at Amazon" />
          <HostCard avatar={AnonymousAvatar} name="Kris Chen" title="DevOps Specialist at BMO" />
          <HostCard avatar={AnonymousAvatar} name="Raven Sun" title="Tech Lead at Fintelic" />
          <HostCard avatar={AnonymousAvatar} name="Felix Gao" title="Senior Business Analyst at DBS，CS master & MBA" />
          <HostCard avatar={AnonymousAvatar} name="Alaa Yagoub" title="Tech Lead & Senior Manager at RBC" />
          <HostCard avatar={AnonymousAvatar} name="Yusra" title="Solution Architect at AWS, previous IT consultant at Bell" />
          <HostCard avatar={AnonymousAvatar} name="Parsa Mah" title="PhD. in Machine Learning, research at Computer Research Institute of Montréal" />
          {/* <HostCard avatar={AnonymousAvatar} name="Sponge Bob" title="The cutest in the ocean" /> */}
        </div>
      </div>
    );
}
  