import React from "react";

export default function Header(props) {
    return (
      <header className="header">
        HEADER
        <a href={props.url}>google</a>
      </header>
    );
}
  