import React from "react";

export default function Accordion (props){
  // const [isActive, setIsActive] = useState(false);

  return (
    // <div className="accordion-item">
    //   <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
    //     <div>{title}</div>
    //     <div>{isActive ? "-" : "+"}</div>
    //   </div>
    //   {isActive && <div className="accordion-content">{content}</div>}
    // </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id={"f" + props.no}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.no} aria-expanded="false" aria-controls="flush-collapseOne">
          {props.title}
        </button>
      </h2>
      <div id={props.no} className="accordion-collapse collapse" aria-labelledby={"f" + props.no} data-bs-parent={"#" + props.parent}>
        <div className="accordion-body" dangerouslySetInnerHTML={{__html:props.content}}>
          {/* {props.content} */}
        </div>
      </div>
    </div>
  );
}