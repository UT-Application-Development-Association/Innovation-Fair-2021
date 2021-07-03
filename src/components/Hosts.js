import React from "react";
import Heading from "./Heading";
import HostCard from "./HostCard";

// Import images
import AnonymousAvatar from "../assets/images/hosts/avatar.jpg";

export default function Hosts(props) {
    return (
      <div>
        <Heading text="HOSTS" />
        <div className="main-hosts-container">
          <HostCard avatar={AnonymousAvatar} name="Kevin Yan" title="Senior Developer at Nielseniq" />
          <HostCard avatar={AnonymousAvatar} name="Fengqing Yuan" title="Software Developer at Amazon" />
          <HostCard avatar={AnonymousAvatar} name="Kris Chen" title="DevOps Specialist at BMO" />
          <HostCard avatar={AnonymousAvatar} name="Sponge Bob" title="The cutest in the ocean" />
          <HostCard avatar={AnonymousAvatar} name="Sponge Bob" title="The cutest in the ocean" />
          <HostCard avatar={AnonymousAvatar} name="Sponge Bob" title="The cutest in the ocean" />
          <HostCard avatar={AnonymousAvatar} name="Sponge Bob" title="The cutest in the ocean" />
          <HostCard avatar={AnonymousAvatar} name="Sponge Bob" title="The cutest in the ocean" />
          <HostCard avatar={AnonymousAvatar} name="Sponge Bob" title="The cutest in the ocean" />
        </div>
      </div>
    );
}
  