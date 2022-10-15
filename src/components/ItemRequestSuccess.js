import React from "react";
import { ReactComponent as ThumbsUp } from "../assets/thumbsup.svg";

export default function ItemRequestSuccess() {
  return (
    <div className="col">
      <ThumbsUp className="mt-6 mb-4" />
      <p className="request-titleText mb-2">Submission Successful!</p>
      <p className="request-subtitleText mb-8">
        We will contact you once your item is ready for delivery.
      </p>
      <button
        className="row request-button button-active px-2 py-1"
        onClick={() => {}}
      >
        View Item Application
      </button>
      <div className="spacer" style={{ height: "192px" }}></div>
      <p
        className="request-subtitleText fw-600"
        style={{ color: "rgb(var(--blue))" }}
      >
        Apply for another item
      </p>
    </div>
  );
}
