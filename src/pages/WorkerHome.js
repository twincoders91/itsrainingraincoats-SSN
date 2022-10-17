import React from "react";

import itemApplication from "../assets/itemApplication.svg";
import calendarWorker from "../assets/calendarWorker.svg";
import lesson from "../assets/lesson.svg";
import medical from "../assets/medical.svg";

const WorkerHome = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-top-section">
          <h1 className="home-h1-22">Hi, Abdur</h1>
          <div className="item-application-container">
            <div
              className="item-application-box ml-2 mr-2"
              onClick={() => {
                console.log("im clicked");
              }}
            >
              <img
                src={itemApplication}
                alt="donateimage"
                className="donate-application-icon"
              />
            </div>

            <p className="noto-12">Item Application</p>
          </div>
        </div>
        <div className="home-bottom-section">
          <div className="activity-individual-boxes">
            <div className="activity-icon-box">
              <img
                src={calendarWorker}
                alt="calendarWorkerimage"
                className="item-application-icon"
              />
            </div>
            <p className="noto-12">Events</p>
          </div>
          <div className="activity-individual-boxes">
            <div className="activity-icon-box">
              <img
                src={lesson}
                alt="lessonimage"
                className="item-application-icon"
              />
            </div>
            <p className="noto-12">Lessons</p>
          </div>
          <div className="activity-individual-boxes">
            <div className="activity-icon-box">
              <img
                src={medical}
                alt="medicalimage"
                className="item-application-icon"
              />
            </div>
            <p className="noto-12">Medical</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
