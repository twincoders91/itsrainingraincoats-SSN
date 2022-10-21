import React from "react";
import returnicon from "../assets/returnicon.png";
import cross from "../assets/cross.svg";
import { Link } from "react-router-dom";

const NavBarCreateAccount = (props) => {
  const { setCurrentPage, currentPage } = props;

  const handlePrevPage = () => {
    if (currentPage === "worker3") {
      setCurrentPage("worker2");
    } else if (currentPage === "worker2") {
      setCurrentPage("worker1");
    } else if (currentPage === "worker1") {
      setCurrentPage("selection");
    } else if (currentPage === "donor1") {
      setCurrentPage("selection");
    }
  };
  return (
    <div>
      <div className="main-header-container">
        <div className="Navbar-createaccount-center">
          {currentPage === "worker4" && (
            <div className="createaccount-header-box">
              <h1 className="donate-header-font">Account Created</h1>
              <Link to="/home" className="cross-button">
                <img src={cross} alt=""></img>
              </Link>
            </div>
          )}
          {!(currentPage === "worker4") &&
            !(currentPage === "selection") &&
            !(currentPage === "donor1") && (
              <div className="createaccount-header-box-left">
                <img
                  src={returnicon}
                  alt="returnicon"
                  className="return-icon"
                  onClick={() => handlePrevPage()}
                ></img>
                <h1 className="donate-header-font">Create Account</h1>
              </div>
            )}
          {currentPage === "selection" && (
            <div className="createaccount-header-box-left">
              <Link to="/login">
                <img
                  src={returnicon}
                  alt="returnicon"
                  className="return-icon"
                ></img>
              </Link>
              <h1 className="donate-header-font">Create Account</h1>
            </div>
          )}
          {currentPage === "donor1" && (
            <div className="createaccount-header-box-left">
              <img
                src={returnicon}
                alt="returnicon"
                className="return-icon"
                onClick={() => handlePrevPage()}
              ></img>
              <h1 className="donate-header-font">Create Account</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarCreateAccount;
