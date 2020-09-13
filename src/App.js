import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
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
