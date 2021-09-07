import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
// import SearcParams from "./SearchParams";
import DropDownMenu from "./DropDownMenu-ReUsable";
// import Menu from "./Menu";

const App = () => {
  return (
    <div>
      <DropDownMenu />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
