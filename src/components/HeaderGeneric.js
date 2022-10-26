import React from "react";
import { ReactComponent as Logo } from "../assets/logo_large.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";

export default function HeaderGeneric(props) {
  return (
    <div className="row header-container">
      {props.profile && (
        <div className="spacer" style={{ width: "32px" }}></div>
      )}
      {props.headerTitle ? (
        <span className="header-titleText" style={{ textAlign: "center" }}>
          {props.headerTitle}
        </span>
      ) : (
        <Logo style={{ height: "48px", flex: 1 }} />
      )}
      {props.profile && <Profile />}
    </div>
  );
}
