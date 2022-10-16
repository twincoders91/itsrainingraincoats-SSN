import React from "react";
import { capitaliseFirstLetter } from "./utility";

export default function ItemRequestDeliveryItem(props) {
  const handleDelete = () => {
    const array = [...props.selectedItems];
    array.splice(props.index, 1);
    props.setSelectedItems(array);
    if (array.length === 0) {
      props.setCurrentPage("addItem");
    }
  };

  return (
    <div className="row request-item-card-details justify-sb mb-1">
      <img src={require(`../assets/${props.icon}`)} alt="" height="32px" />
      <div className="col" style={{ flex: 1 }}>
        <span className="request-subtitleText request-header fw-600 ml-2">
          {capitaliseFirstLetter(props.name)}
        </span>
        <span className="request-subsubtitleText request-header ml-2">
          Delivery in 7 days
        </span>
      </div>
      <span
        className="request-subsubtitleText request-item-card-delete fw-600 ml-2"
        onClick={handleDelete}
      >
        Delete
      </span>
    </div>
  );
}
