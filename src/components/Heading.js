import React from "react";

export default function Heading(props) {
    return (
      <h1 className="heading" styles="color: {props.color};">
        {props.text}
      </h1>
    );
}
  