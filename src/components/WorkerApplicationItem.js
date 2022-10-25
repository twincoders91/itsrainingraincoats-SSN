import React from "react";

import { capitaliseFirstLetter } from "./utility";

const WorkerApplicationItem = (props) => {
  const handleDelete = async () => {
    const res = await deleteItemRequest();
    if (res.status === "ok") {
      props.setDisplayArray((prevState) => {
        const array = [...prevState];
        array.splice(props.index, 1);
        props.setRequestCount(array.length);
        return array;
      });
    }
  };

  const deleteItemRequest = async () => {
    const res = await fetch(
      `http://127.0.0.1:5001/item_request/${props.request_id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    const response = res.json();
    return response;
  };

  return (
    <div className="row request-item-card-details justify-sb mb-2">
      <img src={require(`../assets/${props.icon}`)} alt="" height="32px" />
      <div className="col" style={{ flex: 1 }}>
        <span className="request-subtitleText request-header fw-600 ml-2">
          {capitaliseFirstLetter(props.item)}
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
};

export default WorkerApplicationItem;
