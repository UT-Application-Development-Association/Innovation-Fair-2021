import React from "react";

export default function Heading(props) {
    return (
      <h1 className="heading" styles={props.color && "color: " + props.color }>
        {props.text}
      </h1>
    );
}
  