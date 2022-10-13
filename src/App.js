import React from "react";

import Home from "./pages/Home";
import ReactApp from "./components/ReactApp";

function App() {
  return (
    <div className="main-app-container">
      <>
        <div className="main-body-container">
          <ReactApp />
        </div>
      </>
    </div>
  );
}

export default App;
