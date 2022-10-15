import React from "react";

export default function ItemRequestCategory(props) {
  console.log(props);
  return (
    <div className="col">
      <button className="row request-icon-button mb-1">
        <img src={require(`../assets/${props.icon}`)} alt="" />
      </button>
      <span className="request-subsubtitleText request-icon-text fw-600">
        {props.name}
      </span>
    </div>
  );
}
