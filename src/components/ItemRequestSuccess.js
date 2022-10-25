/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ThumbsUp } from "../assets/thumbsup.svg";

export default function ItemRequestSuccess(props) {
  const handleApplyAgainClick = () => {
    props.setCurrentPage("addItem");
  };

  useEffect(() => {
    if (props.currentPage === "success") {
      props.setHeaderTitle("Application Successful");
    }
  }, [props.currentPage]);

  return (
    <div className="col">
      <ThumbsUp className="mt-6 mb-4" />
      <p className="request-titleText mb-2">Submission Successful!</p>
      <p className="request-subtitleText mb-8">
        We will contact you once your item is ready for delivery.
      </p>
      <NavLink to="/application">
        <button className="row request-button button-active px-2 py-1">
          View Item Application
        </button>
      </NavLink>
      <div className="spacer" style={{ height: "192px" }}></div>
      <p
        className="request-subtitleText request-applyAgain fw-600"
        style={{ color: "rgb(var(--blue))" }}
        onClick={handleApplyAgainClick}
      >
        Apply for another item
      </p>
    </div>
  );
}
