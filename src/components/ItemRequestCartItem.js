import React from "react";
import fill from "../assets/fill.svg";

import { capitaliseFirstLetter } from "./utility";

export default function ItemRequestCartItem(props) {
  const handleDelete = () => {
    const array = [...props.selectedItems];
    array.splice(props.index, 1);
    props.setSelectedItems(array);
    if (array.length === 0) {
      props.setCurrentPage("addItem");
    }
  };

  const handleEdit = () => {
    const array = [...props.selectedItems];
    array.splice(props.index, 1);
    props.setSelectedItems(array);
    props.setPageHistory((prevState) => {
      return ["addItem", ...prevState];
    });
    props.setCurrentPage("category");
    props.setCategory(props.category);
  };

  return (
    <div className="request-item-card mb-2">
      <div className="row request-item-card-details justify-sb mb-1">
        <img src={require(`../assets/${props.icon}`)} alt="" height="32px" />
        <span
          className="request-subtitleText request-header fw-600 ml-2"
          style={{ flex: 1 }}
        >
          {capitaliseFirstLetter(props.name)}
        </span>
        <button
          className="row request-item-card-edit-button"
          onClick={handleEdit}
        >
          <img src={fill} alt="" />
        </button>
      </div>
      <div className="row justify-sb">
        <span
          className="request-subsubtitleText request-item-card-delete fw-600 ml-2"
          onClick={handleDelete}
        >
          Delete
        </span>
        <span className="request-subsubtitleText mr-2">Delivery in 7 days</span>
      </div>
    </div>
  );
}
