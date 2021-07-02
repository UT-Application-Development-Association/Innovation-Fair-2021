import React from "react";

export default function TimelineItem(props) {
    return (
      <div className="timeline-item">
        <div>
            {props.time}
        </div>
        <div>
            {props.description}
        </div>
      </div>
    );
}
  