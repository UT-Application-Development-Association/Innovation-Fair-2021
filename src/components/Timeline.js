import React from "react";
import Heading from "./Heading";
import TimelineItem from "./TimelineItem";

export default function Timeline(props) {
    return (
      <div>
        <Heading text="TIMELINE" />
        <div className="timeline-container">
            <TimelineItem time="2021-08-06" description="hello"/>
            <TimelineItem time="2021-08-06" description="hello"/>
            <TimelineItem time="2021-08-06" description="hello"/>
        </div>
      </div>
    );
}
  