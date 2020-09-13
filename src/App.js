import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    //BEM convention
    <div className="app">
      <Header />
      {/* Header -- Navbar on the component */}
      {/* Home -- Rest of the body */}
    </div>
  );
}

export default App;
