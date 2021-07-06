import React from "react";

export default function TimelineItem(props) {
    return (
      <div className="timeline-item">
        <div className="timeline-time">
          <div className="from">{props.from}</div>
          <div className="to">{props.to}</div>
        </div>
        <div className="timeline-description">
            <h4>
              {props.title}
            </h4>
            <p>{props.description}</p>
        </div>
      </div>
    );
}
  