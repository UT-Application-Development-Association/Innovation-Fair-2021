import React from "react";

export default function TimelineItem(props) {
    return (
      <div className="timeline-item">
        <div className="timeline-time">
          <div className="from">{props.from} EST</div>
          <div className="to">{props.to} EST</div>
        </div>
        <div className="timeline-description">
            <h4>
              {props.title}
            </h4>
            <p dangerouslySetInnerHTML={{__html:props.description}}></p>
        </div>
      </div>
    );
}
  