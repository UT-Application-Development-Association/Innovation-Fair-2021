import React from "react";

export default function HostCard(props) {
    return (
      <div className="host-card m-0 m-sm-3">
        <div className="avatar-container">
          <img src={props.avatar} alt={props.name} />
        </div>
        <div className="host-info-container">
          <h5 className="name">{props.name}</h5>
          <h6 className="title">{props.title}</h6>
        </div>
      </div>
    );
}
  